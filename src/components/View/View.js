import React from 'react'
import {View as PdfView} from '@react-pdf/renderer'
import { useSelector } from 'react-redux'
import { selectObjects } from '../../state/slices/objects'
import { selectSelected } from '../../state/slices/selected'
import { OBJECT_TYPES, PROPERTIES } from '../Constants'
import Text from '../Text/Text'

export default function View({id}) {
    const objects = useSelector(selectObjects)
    const selected = useSelector(selectSelected)

    const ChildList = createChildList(id, objects)
   
    const border = selected.id === id ? '1px solid blue' : 'none'
    return (
        <PdfView style={{...objects[id][PROPERTIES.STYLE], border:border}}>
            {ChildList}
        </PdfView>
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
        if(objects[key][PROPERTIES.TYPE] === OBJECT_TYPES.TEXT){
            return (
                <Text key={key} id={key}/>
            )
        }
        if(objects[key][PROPERTIES.TYPE] === OBJECT_TYPES.VIEW){
            return (
                <View key={key} id={key}/>
            )
        }
        return null;
    })

    return list;
}
