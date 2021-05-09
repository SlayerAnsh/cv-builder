import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCopy, setCopy } from '../../../state/slices/copy'
import { addMultipleObjects, addObject, selectObjects, uuid } from '../../../state/slices/objects'
import { selectSelected } from '../../../state/slices/selected'
import { COPY_ALLOWED, COPY_ENUM, OBJECT_TYPES, PROPERTIES } from '../../Constants'
import EditorItemTemplate from '../EditorItemTemplate'

export default function CreateEditor() {

    const copy = useSelector(selectCopy)
    const objects = useSelector(selectObjects)
    const selected = useSelector(selectSelected)
    const dispatch = useDispatch();

    const currentObject = objects[selected.id]

    const checkDisabled = (id, type) => {
        if (selected.id === null) {
            return true;
        }

        return COPY_ALLOWED[currentObject[PROPERTIES.TYPE]][type] === COPY_ENUM.NONE
    }

    const checkPasteDisabled = (destinationId, copyEnumType) => {
        if (!objects[copy.id]) {
            return true;
        }

        return !(COPY_ALLOWED[objects[destinationId][PROPERTIES.TYPE]][copy.type] & copyEnumType);
    }

    const handlePaste = (parent) => {
        if (copy.id <= 4) {
            let data = {
                ...objects[copy.id]
            };
            data[PROPERTIES.PARENT] = parent;
            if (objects[selected.id].parent === parent) {
                data[PROPERTIES.POS] = objects[selected.id][PROPERTIES.POS] + 1;
            } else {
                data[PROPERTIES.POS] = 1;
            }
            dispatch(addObject(data))
            return;
        }
        let startId = uuid(objects);
        let newObjects = {};
        newObjects[startId] = {
            ...objects[copy.id]
        }
        newObjects[startId][PROPERTIES.PARENT] = parent;
        if (objects[selected.id][PROPERTIES.PARENT] === parent) {
            newObjects[startId][PROPERTIES.POS] = objects[selected.id][PROPERTIES.POS] + 1;
        } else {
            newObjects[startId][PROPERTIES.POS] = 1;
        }
        recurCreateObjects({ id: parseInt(startId) + 1 }, startId, copy.id, objects, newObjects);
        dispatch(addMultipleObjects({ data: newObjects, rootId: startId }))
    }

    if (!currentObject) {
        return (
            <EditorItemTemplate header="Create">

            </EditorItemTemplate>
        )
    }

    return (
        <EditorItemTemplate header='Create'>
            <InfoBox>
                <p>Item Copied: {copy.id && objects[copy.id] ? '(' + copy.id + ') ' + objects[copy.id][PROPERTIES.NAME] + ' ' + objects[copy.id][PROPERTIES.TYPE] : 'None'}</p>
                <p>Copy Items: </p>
            </InfoBox>
            <ActionBox>
                <button type='button' onClick={() => dispatch(setCopy({ id: '1', type: OBJECT_TYPES.DOCUMENT }))} disabled={checkDisabled(selected.id, OBJECT_TYPES.DOCUMENT)} > Document</button>
                <button type='button' onClick={() => dispatch(setCopy({ id: '2', type: OBJECT_TYPES.PAGE }))} disabled={checkDisabled(selected.id, OBJECT_TYPES.PAGE)} > Page</button>
                <button type='button' onClick={() => dispatch(setCopy({ id: '3', type: OBJECT_TYPES.VIEW }))} disabled={checkDisabled(selected.id, OBJECT_TYPES.VIEW)} > View</button>
                <button type='button' onClick={() => dispatch(setCopy({ id: '4', type: OBJECT_TYPES.TEXT }))} disabled={checkDisabled(selected.id, OBJECT_TYPES.TEXT)} > Text</button>
            </ActionBox>
            <p>Paste Options: </p>
            <ActionBox>
                <button type='button' onClick={() => handlePaste(selected.id)} disabled={checkPasteDisabled(selected.id, COPY_ENUM.INSIDE)}>Paste Inside</button>
                <button type='button' onClick={() => handlePaste(objects[selected.id][PROPERTIES.PARENT])} disabled={checkPasteDisabled(selected.id, COPY_ENUM.BELOW)}>Paste Below</button>
            </ActionBox>
        </EditorItemTemplate>
    )
}


function recurCreateObjects(newId, newParentId, oldParentId, objects, newObjects) {
    for (const key in objects) {
        if (objects[key][PROPERTIES.PARENT] === oldParentId) {
            newObjects[newId.id] = {
                ...objects[key]
            }
            newObjects[newId.id][PROPERTIES.PARENT] = newParentId;
            let currentId = newId.id;
            newId.id = newId.id + 1;
            recurCreateObjects(newId, currentId.toString(), key, objects, newObjects);
        }
    }
}


const InfoBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    font-size:12px;
`

const ActionBox = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:stretch;
    justify-content:space-between;
    margin: 5px 0px 10px 0px;
    & > button {
        background-color:transparent;
        border:1px solid black;
        margin:5px;
        padding:5px;
        flex:1;
        :hover {
            background-color:green;
            cursor: pointer;
        }
    }
`
