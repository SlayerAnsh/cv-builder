import React,{useRef} from 'react'
import {EditableLink} from '../editable'
import {StyleSheet,View} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    links:{
        fontSize:'4mm',
        fontWeight:'normal',
        alignSelf:'stretch',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        padding:'5pt 10mm 5pt 10mm',
        marginTop:'4mm',
        backgroundColor:'#f1f1f1'
    },
    link:{
        flex:'1 0 40%',
        flexGrow:'1',
        flexShrink:'0',
        flexBasis:'40%',
        textDecoration:'none',
        padding:'3pt 0pt',
        color:'black'
    }
})

function Links({data,setData,web}) {
    const inputRef = useRef(null);
    return (
        <View style={styles.links}>
        {data.links?data.links.map((link,index)=>{
            return (
                <EditableLink
                    text={link.text}
                    src = {link.src}
                    placeholder={"Link " + (index+1)}
                    type="input"
                    childRef={inputRef}
                    web={web}
                    style={styles.link}
                    >
                    <input
                        ref={inputRef}
                        type="text"
                        name={"link" + index}
                        placeholder="Link Text"
                        value={link.text}
                        onChange={({target}) => setData(prev=>{
                            prev.links[index].text = target.value||'';
                            return {...prev}
                        })}
                        style={{fontSize:'0.8em'}}
                    />
                    <input
                        type="text"
                        name={"link" + index}
                        placeholder="Link Src"
                        value={link.src}
                        onChange={({target}) => setData(prev=>{
                            prev.links[index].src = target.value||'';
                            return {...prev}
                        })}
                        style={{fontSize:'0.8em'}}
                    />
                    <button onClick={()=>setData(prev=>{
                        prev.links.splice(index+1,0,{text:'',src:''});
                        return {...prev}
                    })}>Add</button>
                    <button onClick={()=>setData(prev=>{
                        if(prev.links.length>1)
                            prev.links.splice(index,1);
                        return {...prev}
                    })}>remove</button>
                </EditableLink>
            )
        }):setData({...data,links:[{text:'',src:''}]})}
        </View>
    )
}

export default Links
