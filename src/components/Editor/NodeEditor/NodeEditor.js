import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeObject, selectObjects, updateObject } from '../../../state/slices/objects'
import { selectSelected, setSelected } from '../../../state/slices/selected'
import { PROPERTIES, PROPERTIES_ALLOWED } from '../../Constants'
import EditorItemTemplate from '../EditorItemTemplate'
import { Input } from './NodeEditorItems'

export default function NodeEditor() {
    const selected = useSelector(selectSelected)
    const objects = useSelector(selectObjects)
    const dispatch = useDispatch();

    const currentObject = objects[selected.id]

    const handleDelete = () => {
        if (!selected || selected.id <= 4 || selected.id === null) {
            return;
        }
        dispatch(removeObject({ id: selected.id }))
        dispatch(setSelected({ id: null, type: null }))
    }

    const nameSetter = (value) => {
        let id = selected.id;
        let key = PROPERTIES.NAME;
        let data = value;
        dispatch(updateObject({ id: id, key: key, data: data }))
    }

    const textSetter = (value) => {
        let id = selected.id;
        let key = PROPERTIES.TEXT;
        let data = value;
        dispatch(updateObject({ id: id, key: key, data: data }))
    }

    const linkSetter = (value) => {
        let id = selected.id;
        let key = PROPERTIES.LINK;
        let data = value;
        dispatch(updateObject({ id: id, key: key, data: data }))
    }

    if (!currentObject) {
        return (
            <EditorItemTemplate header="Node">
            
            </EditorItemTemplate>
        )
    }

    return (
        <EditorItemTemplate header="Node">
            <InputBox>

                <Input label="Name" setter={nameSetter} disabled={!PROPERTIES_ALLOWED.NAME[currentObject.type]} placeholder="Descriptive Name" value={currentObject[PROPERTIES.NAME] || ""} />
                <Input label="Text" setter={textSetter} disabled={!PROPERTIES_ALLOWED.TEXT[currentObject.type]} placeholder="Text Value of Text Node" value={currentObject[PROPERTIES.TEXT] || ""} />
                <Input label="Link" setter={linkSetter} disabled={!PROPERTIES_ALLOWED.LINK[currentObject.type]} placeholder="Link for Text Node" value={currentObject[PROPERTIES.LINK] || ""} />
                
            </InputBox>

            <ActionBox>
                <button type='button' onClick={handleDelete}>Delete</button>
            </ActionBox>

        </EditorItemTemplate>
    )
}

const ActionBox = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:stretch;
    justify-content:space-between;
    margin: 5px 0px 5px 0px;
    & > button {
        background-color:transparent;
        border:1px solid black;
        margin:5px 5px 0px 5px;
        padding:5px;
        flex:1;
        :hover {
            background-color:green;
            cursor: pointer;
        }
    }
`

const InputBox = styled.div`
    display:flex;
    flex-direction:column;
    padding:5px;
`