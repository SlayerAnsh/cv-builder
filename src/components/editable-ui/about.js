import React,{useRef} from 'react'
import {EditableText} from './editable'
import {StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    about:{
        fontSize:'4mm',
        fontWeight:'normal',
        alignSelf:'flex-start',
        marginLeft:'10mm',
        color:'#3f3f3f',
        marginRight:'20mm',
        marginTop:'1mm'
    }
})

function About({data,setData}) {
    const inputRef = useRef(null);

    return (
        <EditableText
            text={data.about}
            placeholder="Your About"
            type="textarea"
            childRef={inputRef}
            style={styles.about}
            >
            <textarea
                ref={inputRef}
                type="text"
                name="about"
                placeholder="Your About"
                value={data.about}
                onChange={e => setData({...data,about:e.target.value})}
                style={{fontSize:'0.9em'}}
                cols='70'
                rows='2'
            />
        </EditableText>
    )
}

export default About
