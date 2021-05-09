import React from 'react'
import { Link as PdfLink, Text as PdfText } from '@react-pdf/renderer'
import { useSelector } from 'react-redux'
import { selectObjects } from '../../state/slices/objects'
import { selectSelected } from '../../state/slices/selected'
import { PROPERTIES } from '../Constants'

export default function Text({ id }) {
    const objects = useSelector(selectObjects)
    const selected = useSelector(selectSelected)

    const border = selected.id === id ? '1px solid blue' : 'none'

    return (
        <PdfText style={{ ...objects[id][PROPERTIES.STYLE], border: border }}>
            {objects[id][PROPERTIES.TEXT]}
        </PdfText>
    )
}
