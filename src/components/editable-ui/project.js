import React,{useRef} from 'react'
import {EditableText,EditableLink} from './editable'
import {StyleSheet,View} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    project:{
        alignSelf:'stretch',
        marginTop:'6mm',
        display:'flex',
        flexDirection:'column'
    },
    title:{
        fontSize: '5mm',
        color:'#46919a',
        fontWeight:'bold',
        textTransform:'uppercase',
        borderBottom:'1pt solid #46919a'

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
    link:{
        textDecoration:'none',
        fontSize:'12pt',
        color:'green',
        alignSelf:'center',
        marginLeft:'4pt'
    },
    duration:{
        fontSize:'10pt',
        color:'#656867'
    },
    points:{
        fontSize:'12pt'
    }
    

})

function Project({data,setData,web}) {
    const inputRef = useRef(null);

    return (
        <View style={styles.project}>
            <EditableText
                text={data.project}
                placeholder="Projects"
                type="input"
                childRef={inputRef}
                style={styles.title}
                >
                <input
                    ref={inputRef}
                    type="text"
                    name="project"
                    placeholder="Projects"
                    value={data.project}
                    onChange={e => setData({...data,project:e.target.value})}
                    style={{fontSize:'0.8em'}}
                />
            </EditableText>
            {data.projects?data.projects.map((project,index)=>{
                return (
                    <>
                    <View style={styles.headView}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <EditableText
                        text={project.head}
                        placeholder={"Project Title" + (index + 1)}
                        type="input"
                        childRef={inputRef}
                        style={styles.head}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="project head"
                            placeholder={"Project Title" + (index + 1)}
                            value={project.head}
                            onChange={({target}) => setData(prev=>{
                                prev.projects[index].head = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <button onClick={()=>setData(prev=>{
                            prev.projects.splice(index+1,0,{head:'',link:{text:'',src:''},duration:'',points:['']});
                            return {...prev}
                        })}>Add</button>
                        <button onClick={()=>setData(prev=>{
                            if(prev.projects.length>1)
                            prev.projects.splice(index,1);
                            return {...prev}
                        })}>remove</button>
                    </EditableText>
                    <EditableLink
                        text={"[" + project.link.text + "]"}
                        src = {project.link.src}
                        placeholder='Link'
                        type="input"
                        childRef={inputRef}
                        web={web}
                        style={styles.link}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="project link"
                            placeholder="Link Text"
                            value={project.link.text}
                            onChange={({target}) => setData(prev=>{
                                prev.projects[index].link.text = target.value||'';
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <input
                            type="text"
                            name={"link" + index}
                            placeholder="Link Src"
                            value={project.link.src}
                            onChange={({target}) => setData(prev=>{
                                prev.projects[index].link.src = target.value||'';
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                    </EditableLink>
                    </View>
                    <EditableText
                        text={project.duration}
                        placeholder="duration"
                        type="input"
                        childRef={inputRef}
                        style={styles.duration}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="project duration"
                            placeholder='duration'
                            value={project.duration}
                            onChange={({target}) => setData(prev=>{
                                prev.projects[index].duration = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                    </EditableText>
                </View>
                {project.points.map((point,indexp)=>{
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
                                name="project point"
                                placeholder={'point ' + (indexp + 1)}
                                value={point}
                                onChange={({target}) => setData(prev=>{
                                    prev.projects[index].points[indexp] = target.value
                                    return {...prev}
                                })}
                                style={{fontSize:'0.8em'}}
                            />
                            <button onClick={()=>setData(prev=>{
                                prev.projects[index].points.splice(indexp+1,0,'');
                                return {...prev}
                            })}>Add</button>
                            <button onClick={()=>setData(prev=>{
                                if(prev.projects[index].points.length>1)
                                prev.projects[index].points.splice(indexp,1);
                                return {...prev}
                            })}>remove</button>
                        </EditableText>
                    )
                })}
                </>
                )
            }):setData({...data,projects:[{head:'',link:{text:'',src:''},duration:'',points:['']}]})}
        </View>
    )
}

export default Project
