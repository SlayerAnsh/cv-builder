import React,{useRef} from 'react'
import {EditableText} from '../editable'
import {StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    name:{
        alignSelf:'flex-start',
        marginLeft:'10mm',
        fontSize:'8mm',
        fontWeight:'bold'
    }
})

function Name({data,setData}) {
    const inputRef = useRef(null);

    return (
        <EditableText
            text={data.name}
            placeholder="YOUR NAME"
            type="input"
            childRef={inputRef}
            style={styles.name}
            >
            <input
                ref={inputRef}
                type="text"
                name="NAME"
                placeholder="YOUR NAME"
                value={data.name}
                onChange={e => setData({...data,name:e.target.value})}
                style={{fontSize:'0.8em'}}
            />
        </EditableText>
    )
}

export default Name
