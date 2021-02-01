import React from 'react'
import {View,StyleSheet} from '@react-pdf/renderer'
import Work from './work'
import Education from './education'
import Project from './project'
import Tech from './tech'
import General from './general'
import Interest from './interest'

const styles = StyleSheet.create({
    view:{
        alignSelf:'stretch',
        display:'flex',
        flexDirection:'row',
        alignItems:'stretch',
        margin:'5mm 10mm'
    },
    left:{
        flex:'1 0 65%',
        flexGrow:'1',
        flexShrink:'0',
        flexBasis:'65%',
        // backgroundColor:'#e3e3e3',
        display:'flex',
        flexDirection:'column',
        paddingRight:'10mm'
    },
    right:{
        flex:'1 0 35%',
        flexGrow:'1',
        flexShrink:'0',
        flexBasis:'35%',
    }
})

function Center({data,setData,web}) {

    return (
        <View style={styles.view}>
            <View style={styles.left}>
                <Work data={data} setData={setData}/>
                <Education data={data} setData={setData}/>
                <Project data={data} setData={setData} web={web}/>
            </View>
            <View style={styles.right}>
                <Tech data={data} setData={setData}/>
                <General data={data} setData={setData} />
                <Interest data={data} setData={setData} />
            </View>    
        </View>
    )
}

export default Center
