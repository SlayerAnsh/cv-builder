import React from 'react'
import {View,StyleSheet} from '@react-pdf/renderer'
import Name from './name'
import Links from './links'
import About from './about'

const styles = StyleSheet.create({
    view:{
        alignSelf:'stretch',
        // backgroundColor:'#e3e3e3',
        paddingTop:'5mm',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }
})

function Header({data,setData,web}) {

    return (
        <View style={styles.view}>
            <Name data={data} setData={setData}/>
            <About data={data} setData={setData}/>
            <Links data={data} setData={setData} web={web}/>
        </View>
    )
}

export default Header
