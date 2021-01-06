import React from 'react'
import {Document,Page,Text,View,StyleSheet,Font,Link,Image} from '@react-pdf/renderer'
import AbelPro from '../../fonts/Abel-Pro/AbelPro.ttf'
import AbelProBold from '../../fonts/Abel-Pro/AbelPro-Bold.ttf'
import GitImg from '../../images/github.png'
import LinkedinImg from '../../images/linkedin.png'
import GmailImg from '../../images/gmail.png'

Font.register({family:'Abel-Pro', fonts:[ {src:AbelPro}, {src:AbelProBold, fontWeight:'bold'}, ] })
Font.registerHyphenationCallback(word => {
    return [word];
  });

const styles = StyleSheet.create({
    page: {
        display:'flex',
        flexDirection:'column',
        wordBreak:'keep-all',
        fontFamily:'Abel-Pro',
        fontSize:'5mm',
        lineHeight:'1.2'
    },
    headerView: {
        padding:'8mm 10mm 8mm 10mm',
        display:'flex',
        flexDirection:'column',
    },
    name : {
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:'8mm',
        lineHeight:'1.5',
    },
    linksView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        margin: '0.1mm 0mm'
    },
    links: {
        fontWeight:'normal',
        fontSize:'4mm',
        lineHeight:'1.5',
        marginLeft:'2mm',
        alignSelf:'flex-end'
    },
    linkImage:{
        height:'6mm',
        width:'6mm',
    },
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:"stretch",
    },
    left:{
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',
        flex:'0 0 70%',
        flexGrow:'0',
        flexShrink:'0',
        flexBasis:'70%',
        padding:'5mm 10mm 5mm 10mm'
    },
    right:{
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',
        flex:'0 0 30%',
        flexGrow:'0',
        flexShrink:'0',
        flexBasis:'30%',
        padding:'5mm 10mm 5mm 10mm'
    },
    contentBlock:{
        display:'flex',
        flexDirection:'column',
    },
    contentHeading:{
        fontWeight:'bold',
        fontSize:'5mm',
        lineHeight:'1.5',
    },
    contentText:{
        fontWeight:'normal',
        fontSize:'4mm',
        lineHeight:'1.5',
    },
})

function pdfViewer({data,show}) {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.headerView}>
                    <Text style={styles.name}>{data.name}</Text>
                    <View style={styles.linksView}> 
                        {show?(<img src={GitImg} style={{height:'6mm',width:'6mm'}} alt='ghlogo'/>):(<Image src={GitImg} style={styles.linkImage}></Image>)}
                        <Text style={styles.links}><Link src={data.github}/>{data.github}</Text>
                    </View>
                    <View style={styles.linksView}> 
                        {show?(<img src={LinkedinImg} style={{height:'6mm',width:'6mm'}} alt='ghlogo'/>):(<Image src={LinkedinImg} style={styles.linkImage}></Image>)}
                        <Text style={styles.links}><Link src={data.linkedin}/>{data.linkedin}</Text>
                    </View>
                    <View style={styles.linksView}> 
                        {show?(<img src={GmailImg} style={{height:'6mm',width:'6mm'}} alt='ghlogo'/>):(<Image src={GmailImg} style={styles.linkImage}></Image>)}
                        <Text style={styles.links}><Link src={data.gmail}/>{data.gmail}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.left}>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Professional Summary</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Work Experience</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Education</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Projects</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Acheivements</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Skills</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Hobbies</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Title</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default pdfViewer
