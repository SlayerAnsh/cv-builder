import React,{useRef} from 'react'
import {EditableText} from '../editable'
import {StyleSheet,View} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    interest:{
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
    block: {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
    },
    text:{
        fontSize: '11pt',
        margin:'4pt 3pt',
        backgroundColor:'#46919a',
        color:'white',
        padding:'3pt 6pt',
        borderRadius:'10pt'
    }
})

function Interest({data,setData}) {
    const inputRef = useRef(null);

    return (
        <View style={styles.interest}>
            <EditableText
                text={data.interest}
                placeholder="INTEREST"
                type="input"
                childRef={inputRef}
                style={styles.title}
                >
                <input
                    ref={inputRef}
                    type="text"
                    name="interest"
                    placeholder="INTEREST"
                    value={data.interest}
                    onChange={e => setData({...data,interest:e.target.value})}
                    style={{fontSize:'0.8em'}}
                />
            </EditableText>
            <View style={styles.block}>
            {data.interests?data.interests.map((interest,index)=>{
                return (
                    <>
                    <EditableText
                        text={interest}
                        placeholder={"Interest" + (index + 1)}
                        type="input"
                        childRef={inputRef}
                        style={styles.text}
                        >
                        <input
                            ref={inputRef}
                            type="text"
                            name="interest"
                            placeholder={"Interest " + (index + 1)}
                            value={interest}
                            onChange={({target}) => setData(prev=>{
                                prev.interests[index] = target.value
                                return {...prev}
                            })}
                            style={{fontSize:'0.8em'}}
                        />
                        <button onClick={()=>setData(prev=>{
                            prev.interests.splice(index+1,0,'');
                            return {...prev}
                        })}>Add</button>
                        <button onClick={()=>setData(prev=>{
                            if(prev.interests.length>1)
                            prev.interests.splice(index,1);
                            return {...prev}
                        })}>remove</button>
                    </EditableText>
                </>
                )
            }):setData({...data,interests:['']})}
            </View>
        </View>
    )
}

export default Interest
