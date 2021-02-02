import React from 'react'
import Base from './base'
import Header from './header'
import Center from './center'



function Pdf({web,data,setData}) {
    return (
        <Base>
            <Header data={data} setData={setData} web={web}/>
            <Center data={data} setData={setData} web={web}/>
        </Base>
    )
}

export default Pdf
