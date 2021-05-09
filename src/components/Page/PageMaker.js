import React from 'react'
import { Page as PdfPage } from '@react-pdf/renderer'
import { PROPERTIES } from '../Constants'
import ViewMaker from '../View/ViewMaker';

export default function PageMaker({ id, data }) {
    const styles = data[id][PROPERTIES.STYLE];
    const ChildList = createChildList(id,data);
    console.log(ChildList)
    return (
        <PdfPage style={styles}>
            {ChildList}
        </PdfPage>
    )
}

const createChildList = (id, data) => {
    let list = []
    for (const key in data) {
        if (data[key][PROPERTIES.PARENT] === id) {
            list.push(key)
        }
    }
    list.sort((a, b) => data[a][PROPERTIES.POS] > data[b][PROPERTIES.POS] ? 1 : -1)
    list = list.map((key) => {
        return (
            <ViewMaker id={key} key={key} data={data} />
        )
    })
    return list;
}
