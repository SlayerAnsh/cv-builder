import React,{useRef} from 'react'
import {EditableText} from './editable'
import {StyleSheet,View} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    general:{
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
    skill:{
        fontSize:'11pt',
        marginTop:'2mm'
    },
    bar:{
        height:'3pt',
        backgroundColor:'#a2d2ff',
        borderRadius:'3pt',
        marginTop:'5pt',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'stretch',
    },
    val:{
        backgroundColor:'#ffafcc',
        borderRadius:'3pt',
    }
})

function General({data,setData}) {
    const inputRef = useRef(null);

    return (
        <View style={styles.general}>
            <EditableText
                text={data.general}
                placeholder="General Skills"
                type="input"
                childRef={inputRef}
                style={styles.title}
                >
                <input
                    ref={inputRef}
                    type="text"
                    name="general"
                    placeholder="General Skills"
                    value={data.general}
                    onChange={e => setData({...data,general:e.target.value})}
                    style={{fontSize:'0.8em'}}
                />
            </EditableText>
            {data.generals?data.generals.map((general,index)=>{
                return (
                    <>
                    <EditableText
                        text={general.skill}
                        placeholder={"Skill Title" + (index + 1)}
                        type="input"
                        childRef={inputRef}
                        style={styles.skill}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="general head"
                            placeholder={"Skill Title" + (index + 1)}
                            value={general.skill}
                            onChange={({target}) => setData(prev=>{
                                prev.generals[index].skill = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <input
                            type="text"
                            name="skill val"
                            placeholder='Val'
                            value={general.val}
                            onChange={({target}) => setData(prev=>{
                                prev.generals[index].val = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <button onClick={()=>setData(prev=>{
                            prev.generals.splice(index+1,0,{skill:'',val:''});
                            return {...prev}
                        })}>Add</button>
                        <button onClick={()=>setData(prev=>{
                            if(prev.generals.length>1)
                            prev.generals.splice(index,1);
                            return {...prev}
                        })}>remove</button>
                    </EditableText>
                    <View style={styles.bar}>
                        <View style={{...styles.val,width:`${isNaN(parseInt(general.val))?'80%':parseInt(general.val)>100?'100%':parseInt(general.val) + '%'}`}}>
                        </View>
                    </View>
                </>
                )
            }):setData({...data,generals:[{skill:'',val:''}]})}
        </View>
    )
}

export default General
