import React from 'react'
import { Text as PdfText, Link as PdfLink } from '@react-pdf/renderer'
import { PROPERTIES } from '../Constants';

export default function TextMaker({ id, data }) {
    const styles = data[id][PROPERTIES.STYLE];

    return (
        <PdfText style={styles}>
            <PdfLink src={data[id][PROPERTIES.LINK]}>{data[id][PROPERTIES.TEXT]}</PdfLink>
        </PdfText>
    )
}