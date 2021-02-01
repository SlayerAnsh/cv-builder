import React,{useRef} from 'react'
import {EditableText} from '../editable'
import {StyleSheet,View} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    tech:{
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
    head: {
        fontSize: '12pt',
        fontWeight:'bold',
        marginTop:'2mm'
    },
    skills:{
        fontSize:'11pt'
    }
    

})

function Tech({data,setData}) {
    const inputRef = useRef(null);

    return (
        <View style={styles.tech}>
            <EditableText
                text={data.tech}
                placeholder="Technical skills"
                type="input"
                childRef={inputRef}
                style={styles.title}
                >
                <input
                    ref={inputRef}
                    type="text"
                    name="tech"
                    placeholder="Technical skills"
                    value={data.tech}
                    onChange={e => setData({...data,tech:e.target.value})}
                    style={{fontSize:'0.8em'}}
                />
            </EditableText>
            {data.techs?data.techs.map((tech,index)=>{
                return (
                    <>
                    <EditableText
                        text={tech.head}
                        placeholder={"Skill Title" + (index + 1)}
                        type="input"
                        childRef={inputRef}
                        style={styles.head}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="tech head"
                            placeholder={"Skill Title" + (index + 1)}
                            value={tech.head}
                            onChange={({target}) => setData(prev=>{
                                prev.techs[index].head = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <button onClick={()=>setData(prev=>{
                            prev.techs.splice(index+1,0,{head:'',points:''});
                            return {...prev}
                        })}>Add</button>
                        <button onClick={()=>setData(prev=>{
                            if(prev.techs.length>1)
                            prev.techs.splice(index,1);
                            return {...prev}
                        })}>remove</button>
                    </EditableText>
                    <EditableText
                        text={tech.skills}
                        placeholder={'skills'}
                        type="input"
                        childRef={inputRef}
                        style={styles.skills}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="tech point"
                            placeholder='skills'
                            value={tech.skills}
                            onChange={({target}) => setData(prev=>{
                                prev.techs[index].skills = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                    </EditableText>
                </>
                )
            }):setData({...data,techs:[{head:'',skills:''}]})}
        </View>
    )
}

export default Tech
