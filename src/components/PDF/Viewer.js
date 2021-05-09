import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectObjects } from '../../state/slices/objects'
import Document from '../Document/Document'

export default function Viewer() {

    const objects = useSelector(selectObjects)

    const DocumentList = createDocumentList(objects)
    
    return (
        <Container>
            {DocumentList}
        </Container>
    )
}

const createDocumentList = (objects) => {
    let list = [];
    for (const key in objects) {
        if (parseInt(key) <= 4) {
            continue;
        }
        if (objects[key].parent === null) {
            list.push(key)
        }
    }
    list.sort((a, b) => objects[a].pos > objects[b].pos ? 1 : -1)

    list = list.map((id) => {
        return (
            <Document id={id} key={id} />
        )
    })

    return list;
}

const Container = styled.div`
    align-self:center;
    display:flex;
    flex-direction:column;
    min-width:50vw;
`
