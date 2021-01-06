import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:stretch;
`
const Element = styled.div`
    flex: 0 0 30%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:stretch;
    text-align:center;
    margin:10px 10px;
    padding: 5px 10px;
    input {
        padding:2px 10px;
    }
`


function pdfMaker({data,setData}) {
    
    const handleChange = (val,key) => {
        setData(prevState => {
            prevState[key] = val;
            return {...prevState};
        })
    }
    console.log(data);
    
    return (
        <Container>
            <Element>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={data.name} onChange={(e)=>handleChange(e.target.value,'name')}/>
            </Element>
            <Element>
                <label htmlFor="github">GitHub Profile Link</label>
                <input type="text" id="github" value={data.github} onChange={(e)=>handleChange(e.target.value,'github')}/>
            </Element>
            <Element>
                <label htmlFor="linkedin">Linkedin Profile Link</label>
                <input type="text" id="linkedin" value={data.linkedin} onChange={(e)=>handleChange(e.target.value,'linkedin')}/>
            </Element>
            <Element>
                <label htmlFor="gmail">Gmail Profile Link</label>
                <input type="text" id="gmail" value={data.gmail} onChange={(e)=>handleChange(e.target.value,'gmail')}/>
            </Element>
            <Element>
                <label htmlFor="summary">Professional Summary</label>
                <input type="text" id="summary" value={data.summary} onChange={(e)=>handleChange(e.target.value,'summary')}/>
            </Element>
            
            
        </Container>
    )
}

export default pdfMaker
