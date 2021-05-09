import React from 'react'
import { useSelector } from 'react-redux'
import { selectObjects } from '../../state/slices/objects'
import { selectSelected } from '../../state/slices/selected'
import { PROPERTIES } from '../Constants'

import { Document as PdfDocument, PDFViewer } from '@react-pdf/renderer'
import Page from '../Page/Page'


export default function Document({ id }) {

    const objects = useSelector(selectObjects)
    const selected = useSelector(selectSelected)

    const PageList = createPageList(id, objects)

    const border = selected.id === id ? '1px solid blue' : 'none'
    return (
        <div style={{ border: border }}>
            <PdfDocument>
                {PageList}
            </PdfDocument>
        </div>
    )
}

const createPageList = (id, objects) => {
    let list = []
    for (const key in objects) {
        if (objects[key][PROPERTIES.PARENT] === id) {
            list.push(key)
        }
    }
    list.sort((a, b) => objects[a][PROPERTIES.POS] > objects[b][PROPERTIES.POS] ? 1 : -1)

    list = list.map((id) => {
        return (
            <Page key={id} id={id} />
        )
    })
    return list;
}