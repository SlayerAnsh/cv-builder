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
        fontSize:'6mm',
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
        fontSize:'9mm',
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
        alignSelf:'flex-end',
        textDecoration:'none',
        color:'black'
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
        flex:'0 0 65%',
        flexGrow:'0',
        flexShrink:'0',
        flexBasis:'65%',
        padding:'5mm 10mm 5mm 10mm'
    },
    right:{
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',
        flex:'0 0 35%',
        flexGrow:'0',
        flexShrink:'0',
        flexBasis:'35%',
        padding:'5mm 10mm 5mm 10mm'
    },
    contentBlock:{
        display:'flex',
        flexDirection:'column',
        marginBottom:'8mm'
    },
    contentHeading:{
        fontWeight:'bold',
        fontSize:'6mm',
        lineHeight:'1.5',
        textTransform:'uppercase',
        marginBottom:'1mm',
        color:'#0d98ba'
    },
    contentText:{
        fontWeight:'normal',
        fontSize:'5mm',
        lineHeight:'1.2',
    },
    barOuter:{
        width:'100%',
        borderRadius:'1mm',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#727272',
        marginBottom:'2mm'
    },
    barInner:{
        height:'1mm',
        borderRadius:'1mm',
        backgroundColor:'red',
    },
    interestCont:{
        display:"flex",
        flexDirection:'row',
        flexWrap:'wrap'
    },
    interest: {
        backgroundColor:'#0dbab1',
        padding:'1mm',
        margin:'1mm'
    },
    eduCont:{
        display:'flex',
        flexDirection:'row',
        alignItems:'stretch',
        marginBottom:'1mm'
    },
    eduleft:{
        flex:'0 0 70%',
        flexBasis:'70%',
        flexGrow:'0',
        flexShrink:'0',
        display:'flex',
        flexDirection:'column'
    },
    eduright:{
        flex:'0 0 30%',
        flexBasis:'30%',
        flexGrow:'0',
        flexShrink:'0',
        display:'flex',
        flexDirection:'column'
    }
})

function pdfViewer({data,show}) {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                {/* HEADER PART OF CV STARTS HERE */}
                <View style={styles.headerView}>
                    <Text style={styles.name}>{data.name}</Text>
                    <View style={styles.linksView}> 
                        {show?(<img src={GitImg} style={{height:'6mm',width:'6mm'}} alt='ghlogo'/>):(<Image src={GitImg} style={styles.linkImage}></Image>)}
                        <Text style={styles.links}>{show?data.github:(<Link src={data.github}>{data.github}</Link>)}</Text>
                    </View>
                    <View style={styles.linksView}> 
                        {show?(<img src={LinkedinImg} style={{height:'6mm',width:'6mm'}} alt='ghlogo'/>):(<Image src={LinkedinImg} style={styles.linkImage}></Image>)}
                        <Text style={styles.links}>{show?data.linkedin:(<Link src={data.linkedin}>{data.linkedin}</Link>)}</Text>
                    </View>
                    <View style={styles.linksView}> 
                        {show?(<img src={GmailImg} style={{height:'6mm',width:'6mm'}} alt='ghlogo'/>):(<Image src={GmailImg} style={styles.linkImage}></Image>)}
                        <Text style={styles.links}>{show?data.gmail:(<Link src={data.gmail}>{data.gmail}</Link>)}</Text>
                    </View>
                </View>
                {/* HEADER PART OF CV ENDS HERE */}
                {/* CONTENT PART OF CV STARTS HERE */}
                <View style={styles.container}>
                    {/* LEFT PART START HERE */}
                    <View style={styles.left}>
                        {/* PROFESSIONAL SUMMARY HERE */}
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>About</Text>
                            <Text style={styles.contentText}>{data.summary}</Text>
                        </View>
                        {/* PROFESSIONAL SUMMARY ENDS HERE */}
                        {/* WORK EXPERIENCE START */}
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Work Experience</Text>
                            {data.works.split(';').map(work => {
                                let val = work.split(',,');
                                if(val.length<3){
                                    return []
                                }
                                let points = val[2].split('//').map(point => (
                                    <Text style={styles.contentText}>- {point}</Text>
                                ))
                                return (<>
                                    <Text style={{...styles.contentText,fontWeight:'bold',marginTop:'1mm'}}>{val[0]}</Text>
                                    <Text style={{...styles.contentText,color:'#828282',fontSize:'4mm'}}>{val[1]}</Text>
                                    {points}
                                </>)
                            })}
                        </View>
                        {/* WORK EXPERIENCE END */}
                        {/* Education Start */}
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Education</Text>
            
                                {data.education.split(';').map(item => {
                                    let val = item.split(',,');
                                    if(val.length<4){
                                        return []
                                    }
                                    let points = val[3].split('//').map(point => (
                                        <Text style={styles.contentText}>{point}</Text>
                                    ))
                                    return (<View style={styles.eduCont}>
                                        <View style={styles.eduleft}>
                                            <Text style={{...styles.contentText,fontWeight:'bold'}}>{val[0]}</Text>
                                            {points}
                                        </View>
                                        <View style={styles.eduright}>
                                            <Text style={{...styles.contentText,fontSize:'4mm'}}>{val[1]}</Text>
                                            <Text style={{...styles.contentText,fontSize:'4mm'}}>{val[2]}</Text>
                                        </View>
                                    </View>)
                                })}
                        </View>
                        {/* Education End */}
                        {/* Projects Start */}
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Projects</Text>
                            {data.projects.split(';').map(project => {
                                let val = project.split(',,');
                                if(val.length<5){
                                    return []
                                }
                                let points = val[4].split('//').map(point => (
                                    <Text style={styles.contentText}>- {point}</Text>
                                ))
                                console.log(val)
                                return (<>
                                    <View style={{marginTop:'1mm',display:'flex',flexDirection:'row'}}>
                                        <Text style={{...styles.contentText,fontWeight:'bold'}}>{val[0]}</Text>
                                        <Text style={{...styles.contentText,color:'green', marginLeft:'1mm',textDecoration:'none'}}>[{show?val[2]:(<Link src={val[1]}>{val[2]}</Link>)}]</Text>
                                    </View>
                                    <Text style={{...styles.contentText,color:'#828282',fontSize:'4mm'}}>{val[3]}</Text>
                                    {points}
                                </>)
                            })}
                        </View>
                        {/* Projects End */}

                    </View>
                    {/* LEFT PART ENDS HERE */}
                    {/* RIGHT PART STARTS HERE */}
                    <View style={styles.right}>
                        {/* SKILLS SECTION */}
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>General Skills</Text>
                            {data.skills.split(';').map(skill => {
                                let val = skill.split(',,');
                                if(val.length < 2){
                                    return [];
                                }
                                val[1] = parseInt(val[1]);
                                if(isNaN(val[1])){
                                    return [];
                                }
                                val[1] = val[1] + '%';
                                console.log(val[1]);

                                return (
                                <>
                                    <Text style={{...styles.contentText,lineHeight:'1.5'}}>{val[0]}</Text>
                                    <View style={styles.barOuter}><View style={{...styles.barInner,width:`${val[1]}`}}></View></View>
                                </>
                                )
                            })}
                        </View>
                        {/* SKILLS END HERE */}
                        {/* TECHNICAL SKILLS */}
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Technical Skills</Text>
                            {data.tech.split(';').map(skill => {
                                let val = skill.split(',,');
                                if(val.length < 2){
                                    return [];
                                }
                                return (
                                <>
                                    <Text style={{...styles.contentText,fontWeight:'bold',marginTop:'2mm'}}>{val[0]}</Text>
                                    <Text style={styles.contentText}>{val[1]}</Text>                
                                </>
                                )
                            })}
                        </View>
                        {/* TECHNICAL SKILLS END HERE */}
                        {/* INTERESTS */}
                        <View style={styles.contentBlock}>
                            <Text style={styles.contentHeading}>Interests</Text>
                            <View style={styles.interestCont}>
                                {data.interest.split(';').map(skill => {
                                    if(skill.length === 0){
                                        return [];
                                    }
                                    return (
                                    <>
                                        <View style={styles.interest}><Text style={{...styles.contentText,color:'white'}}>{skill}</Text></View>             
                                    </>
                                    )
                                })}
                            </View>
                        </View>
                        {/* INTEREST END HERE */}
                    </View>
                    {/* RIGHT SIDE ENDS HERE */}
                </View>
            </Page>
        </Document>
    )
}

export default pdfViewer
