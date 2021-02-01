import React,{useRef} from 'react'
import {EditableText} from '../editable'
import {StyleSheet,View} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    work:{
        alignSelf:'stretch',
        marginTop:'3mm',
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
        alignItems:'flex-end',
        justifyContent:'space-between',
        marginTop:'2mm'
    },
    head: {
        fontSize: '14pt',
        fontWeight:'bold',
    },
    duration:{
        fontSize:'10pt',
        color:'#656867'
    },
    points:{
        fontSize:'12pt'
    }
    

})

function Work({data,setData}) {
    const inputRef = useRef(null);

    return (
        <View style={styles.work}>
            <EditableText
                text={data.work}
                placeholder="WORK EXPERIENCE"
                type="input"
                childRef={inputRef}
                style={styles.title}
                >
                <input
                    ref={inputRef}
                    type="text"
                    name="WORK"
                    placeholder="WORK EXPERIENCE"
                    value={data.work}
                    onChange={e => setData({...data,work:e.target.value})}
                    style={{fontSize:'0.8em'}}
                />
            </EditableText>
            {data.works?data.works.map((work,index)=>{
                return (
                    <>
                    <View style={styles.headView}>
                    <EditableText
                        text={work.head}
                        placeholder={"Work Title" + (index + 1)}
                        type="input"
                        childRef={inputRef}
                        style={styles.head}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="work head"
                            placeholder={"Work Title" + (index + 1)}
                            value={work.head}
                            onChange={({target}) => setData(prev=>{
                                prev.works[index].head = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <button onClick={()=>setData(prev=>{
                            prev.works.splice(index+1,0,{head:'',duration:'',points:['']});
                            return {...prev}
                        })}>Add</button>
                        <button onClick={()=>setData(prev=>{
                            if(prev.works.length>1)
                            prev.works.splice(index,1);
                            return {...prev}
                        })}>remove</button>
                    </EditableText>
                    <EditableText
                        text={work.duration}
                        placeholder="duration"
                        type="input"
                        childRef={inputRef}
                        style={styles.duration}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="work duration"
                            placeholder='duration'
                            value={work.duration}
                            onChange={({target}) => setData(prev=>{
                                prev.works[index].duration = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                    </EditableText>
                </View>
                {work.points.map((point,indexp)=>{
                    return (
                        <EditableText
                            text={"- " + point}
                            placeholder={'point ' + (indexp + 1)}
                            type="input"
                            childRef={inputRef}
                            style={styles.points}
                            >
                            <input
                                ref={inputRef}
                                type="text"
                                name="work point"
                                placeholder={'point ' + (indexp + 1)}
                                value={point}
                                onChange={({target}) => setData(prev=>{
                                    prev.works[index].points[indexp] = target.value
                                    return {...prev}
                                })}
                                style={{fontSize:'0.8em'}}
                            />
                            <button onClick={()=>setData(prev=>{
                                prev.works[index].points.splice(indexp+1,0,'');
                                return {...prev}
                            })}>Add</button>
                            <button onClick={()=>setData(prev=>{
                                if(prev.works[index].points.length>1)
                                prev.works[index].points.splice(indexp,1);
                                return {...prev}
                            })}>remove</button>
                        </EditableText>
                    )
                })}
                </>
                )
            }):setData({...data,works:[{head:'',duration:'',points:['']}]})}
        </View>
    )
}

export default Work
