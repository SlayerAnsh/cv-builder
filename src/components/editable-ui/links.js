import React,{useRef} from 'react'
import {EditableLink} from './editable'
import {StyleSheet,View,Image} from '@react-pdf/renderer'
import LinkImg from '../../images/link.png'

const styles = StyleSheet.create({
    links:{
        fontSize:'4mm',
        fontWeight:'normal',
        alignSelf:'stretch',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        padding:'5pt 20mm 5pt 20mm',
        marginTop:'4mm',
        backgroundColor:'#f4f4f4'
    },
    link:{
        flex:'1 0 40%',
        flexGrow:'1',
        flexShrink:'0',
        flexBasis:'40%',
        textDecoration:'none',
        padding:'3pt 0pt',
        color:'green',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        height:'3mm',
        width:'3mm',
        marginRight:'2mm'
    }
})

function Links({data,setData,web}) {
    const inputRef = useRef(null);
    return (
        <View style={styles.links}>
        {data.links?data.links.map((link,index)=>{
            return (
                <View style={styles.link}>
                {web?(<img src={LinkImg} style={styles.img} alt='link'/>):(<Image src={LinkImg} style={styles.img}></Image>)}    
                <EditableLink
                    text={link.text}
                    src = {link.src}
                    placeholder={"Link " + (index+1)}
                    type="input"
                    childRef={inputRef}
                    web={web}
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
                </View>
            )
        }):setData({...data,links:[{text:'',src:''}]})}
        </View>
    )
}

export default Links
