import React from 'react'
import { View as PdfView } from '@react-pdf/renderer'
import { OBJECT_TYPES, PROPERTIES } from '../Constants'
import TextMaker from '../Text/TextMaker';

export default function ViewMaker({ id, data }) {
    const styles = data[id][PROPERTIES.STYLE];
    const ChildList = createChildList(id,data);
    return (
        <PdfView style={styles}>
            {ChildList}
        </PdfView>
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
        if(data[key][PROPERTIES.TYPE] === OBJECT_TYPES.VIEW){
            return (
                <ViewMaker id={key} key={key} data={data} />
            )
        }
        if(data[key][PROPERTIES.TYPE] === OBJECT_TYPES.TEXT){
            return (
                <TextMaker id={key} key={key} data={data} />
            )
        }
    })
    return list;
}
