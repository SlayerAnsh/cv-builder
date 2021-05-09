import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setCopy } from '../../../state/slices/copy'
import { selectObjects } from '../../../state/slices/objects'
import { selectSelected, setSelected } from '../../../state/slices/selected'
import { PROPERTIES } from '../../Constants'

export default function Layer({ id, level }) {

    const objects = useSelector(selectObjects)
    const selected = useSelector(selectSelected);
    const dispatch = useDispatch();

    const CurrentList = getCurrentList(id, objects, level)

    const handleLayerClick = () => {
        if (selected.id === id) {
            dispatch(setSelected({ id: null, type: null }))
        }
        else {
            dispatch(setSelected({ id: id, type: objects[id][PROPERTIES.TYPE] }))
        }
    }

    const handleCopy = () => {
        dispatch(setCopy({ id: id, type: objects[id][PROPERTIES.TYPE] }))
    }

    const current = id === selected.id ? true : false;
    const paddingLeft = level * 10 + 'px';
    
    
    return (
        <Container level={paddingLeft} current={current}>
            {objects[id] ?
                <div className="current" >
                    <button onClick={handleLayerClick} >{'(' + id + ') ' + objects[id][PROPERTIES.NAME]}</button>
                    <button className="copy" onClick={handleCopy}>C</button>
                </div>
                : null}
            <div className='children'>
                {CurrentList}
            </div>
        </Container>
    )
}

const getCurrentList = (id, objects, level) => {
    let list = [];
    for (const key in objects) {
        if (parseInt(key) <= 4) {
            continue;
        }
        if (objects[key][PROPERTIES.PARENT] === id) {
            list.push(key)
        }
    }
    list.sort((a, b) => objects[a][PROPERTIES.POS] > objects[b][PROPERTIES.POS] ? 1 : -1)

    list = list.map((key) => {
        return (
            <Layer id={key} key={key} level={level + 1} />
        )
    })

    return list
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:stretch;
    align-items:stretch;
    font-size:14px;
    & > .childrent {

    }
    & > .current {
        display:flex;
        flex-direction:row;
        position:relative;
        padding: 5px 0px;
        padding-left: ${props => (props.level ? props.level : '0px')};
        background: ${props => (props.current ? "magenta" : "transparent")};
        transition:all 0.5s ease;
        button:hover {
            cursor: pointer;
        }
        button{
            background:transparent;
        }
        button:focus{
            outline:none;
            border:node;
        }

        .copy {
            position:absolute;
            right:10px;
            top:0px;
            border:1px solid black;
            padding:1px;
            :hover{
                cursor: pointer;
            }
        }
    }
`