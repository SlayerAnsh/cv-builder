import React from 'react'
import { Document as PdfDocument } from '@react-pdf/renderer'
import { PROPERTIES } from '../Constants'
import PageMaker from '../Page/PageMaker'

export default function DocumentMaker({ id, data }) {

    const PageList = createPageList(id, data)
    console.log(PageList)
    return (
        <PdfDocument>
            {PageList}
        </PdfDocument>
    )
}

const createPageList = (id, data) => {
    let list = []
    for (const key in data) {
        if (data[key][PROPERTIES.PARENT] === id) {
            list.push(key)
        }
    }
    list.sort((a, b) => data[a][PROPERTIES.POS] > data[b][PROPERTIES.POS] ? 1 : -1)
    list = list.map((key) => {
        return (
            <PageMaker id={key} key={key} data={data} />
        )
    })
    return list;
}