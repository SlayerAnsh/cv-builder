import React,{useRef} from 'react'
import {EditableText} from '../editable'
import {StyleSheet,View} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    education:{
        alignSelf:'stretch',
        marginTop:'6mm',
        display:'flex',
        flexDirection:'column'
    },
    title:{
        fontSize: '5mm',
        color:'#46919a',
        fontWeight:'bold',
        textTransform:'uppercase'

    },
    headView:{
        alignSelf:'stretch',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'2mm'
    },
    left:{
        display:'flex',
        flexDirection:'column',
        flex:'1 0 60%',
        flexGrow:'1',
        flexShrink:'0',
        flexBasis:'60%'
    },
    right:{
        display:'flex',
        flexDirection:'column',
        flex:'1 0 40%',
        flexGrow:'1',
        flexShrink:'0',
        flexBasis:'40%'
    },
    head: {
        fontSize: '14pt',
        fontWeight:'bold',
        alignSelf:'flex-start',
    },
    duration:{
        fontSize:'10pt',
        color:'#656867',
        textAlign:'right'
    },
    points:{
        fontSize:'12pt'
    }
    

})

function Education({data,setData}) {
    const inputRef = useRef(null);

    return (
        <View style={styles.education}>
            <EditableText
                text={data.education}
                placeholder="Education"
                type="input"
                childRef={inputRef}
                style={styles.title}
                >
                <input
                    ref={inputRef}
                    type="text"
                    name="edu"
                    placeholder="Education"
                    value={data.work}
                    onChange={e => setData({...data,education:e.target.value})}
                    style={{fontSize:'0.8em'}}
                />
            </EditableText>
            {data.educations?data.educations.map((education,index)=>{
                return (
                    <>
                    <View style={styles.headView}>
                    <View style={styles.left}>
                    <EditableText
                        text={education.head}
                        placeholder={"Education Title " + (index + 1)}
                        type="input"
                        childRef={inputRef}
                        style={styles.head}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="edu head"
                            placeholder={"Education Title " + (index + 1)}
                            value={education.head}
                            onChange={({target}) => setData(prev=>{
                                prev.educations[index].head = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <button onClick={()=>setData(prev=>{
                            prev.educations.splice(index+1,0,{head:'',duration:'',points:['']});
                            return {...prev}
                        })}>Add</button>
                        <button onClick={()=>setData(prev=>{
                            if(prev.educations.length>1)
                            prev.educations.splice(index,1);
                            return {...prev}
                        })}>remove</button>
                    </EditableText>
                    {education.points.map((point,indexp)=>{
                        return (
                            <EditableText
                                text={point}
                                placeholder={'point ' + (indexp + 1)}
                                type="input"
                                childRef={inputRef}
                                style={styles.points}
                                >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    name="edu point"
                                    placeholder={'point ' + (indexp + 1)}
                                    value={point}
                                    onChange={({target}) => setData(prev=>{
                                        prev.educations[index].points[indexp] = target.value
                                        return {...prev}
                                    })}
                                    style={{fontSize:'0.8em'}}
                                />
                                <button onClick={()=>setData(prev=>{
                                    prev.educations[index].points.splice(indexp+1,0,'');
                                    return {...prev}
                                })}>Add</button>
                                <button onClick={()=>setData(prev=>{
                                    if(prev.works[index].points.length>1)
                                    prev.educations[index].points.splice(indexp,1);
                                    return {...prev}
                                })}>remove</button>
                            </EditableText>
                        )
                    })}
                    </View>

                    <View style={styles.right}>
                    <EditableText
                        text={education.duration}
                        placeholder="duration"
                        type="textarea"
                        childRef={inputRef}
                        style={styles.duration}
                        >
                        <textarea
                            ref={inputRef}
                            type="text"
                            name="edu duration"
                            placeholder='duration'
                            value={education.duration}
                            onChange={({target}) => setData(prev=>{
                                prev.educations[index].duration = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                    </EditableText>
                    </View>
                    
                </View>
                </>
                )
            }):setData({...data,educations:[{head:'',duration:'',points:['']}]})}
        </View>
    )
}

export default Education
