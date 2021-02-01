import React from 'react'
import AbelPro from '../../fonts/Abel-Pro/AbelPro.ttf'
import AbelProBold from '../../fonts/Abel-Pro/AbelPro-Bold.ttf'
import {Document,Page,StyleSheet,Font} from '@react-pdf/renderer'

Font.register({family:'Abel-Pro', fonts:[ {src:AbelPro}, {src:AbelProBold, fontWeight:'bold'}, ] })
Font.registerHyphenationCallback(word => {
    return [word];
});

const styles = StyleSheet.create({
    page: {
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',
        wordBreak:'keep-all',
        fontFamily:'Abel-Pro',
        fontSize:'5mm',
        lineHeight:'1.2'
    }
});

function Base({children,...props}) {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                {children}
            </Page>
        </Document>
    )
}

export default Base
