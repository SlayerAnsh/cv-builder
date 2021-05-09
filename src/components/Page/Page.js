import React from 'react'
import { Page as PdfPage, StyleSheet } from '@react-pdf/renderer'
import { useSelector } from 'react-redux'
import { selectObjects } from '../../state/slices/objects'
import { selectSelected } from '../../state/slices/selected'
import { PROPERTIES } from '../Constants'
import View from '../View/View'

export default function Page({ id }) {
    const objects = useSelector(selectObjects)
    const selected = useSelector(selectSelected)

    const ChildList = createChildList(id, objects)

    const border = selected.id === id ? '1px solid blue' : 'none'
    return (
        <PdfPage size="A4" style={{ ...objects[id][PROPERTIES.STYLE], ...styles, border: border, display: 'flex' }}>
            {ChildList}
        </PdfPage>
    )
}

const createChildList = (id, objects) => {
    let list = []
    for (const key in objects) {
        if (objects[key][PROPERTIES.PARENT] === id) {
            list.push(key)
        }
    }

    list.sort((a, b) => objects[a][PROPERTIES.POS] > objects[b][PROPERTIES.POS] ? 1 : -1)

    list = list.map((key) => {
        return (
            <View key={key} id={key} />
        )
    })

    return list;
}

const styles = StyleSheet.create({
    height: '297mm',
    width: '210mm',
    marginBottom: '10mm'
})