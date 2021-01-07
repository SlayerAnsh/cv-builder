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
    textarea {
        padding:2px 10px;
    }
    @media (max-width:900px){
        flex: 1 1 20%;  
    }
`


function pdfMaker({data,setData}) {
    
    const handleChange = (val,key) => {
        setData(prevState => {
            prevState[key] = val;
            return {...prevState};
        })
    }
    const handleDataLoad = (file) => {
        try{
            let reader = new FileReader();
            reader.onload = (e)=>{
                var contents = e.target.result;
                var json = JSON.parse(contents);
                setData(json);
            }
            reader.readAsText(file);
        }catch(error){
            alert("Not A valid File");
        }
    }
    
    return (
        <Container>
            <Element>
                <label htmlFor="data">Data File (optional)</label>
                <input type="file" onChange={(e) => handleDataLoad(e.target.files[0])}/>
            </Element>
            <Element>
                <label htmlFor="name">Name</label>
                <textarea rows='2' type="text" id="name" value={data.name} onChange={(e)=>handleChange(e.target.value,'name')}/>
            </Element>
            <Element>
                <label htmlFor="github">GitHub Profile Link</label>
                <textarea rows='2' type="text" id="github" value={data.github} onChange={(e)=>handleChange(e.target.value,'github')}/>
            </Element>
            <Element>
                <label htmlFor="linkedin">Linkedin Profile Link</label>
                <textarea rows='2' type="text" id="linkedin" value={data.linkedin} onChange={(e)=>handleChange(e.target.value,'linkedin')}/>
            </Element>
            <Element>
                <label htmlFor="gmail">Gmail Profile Link</label>
                <textarea rows='2' type="text" id="gmail" value={data.gmail} onChange={(e)=>handleChange(e.target.value,'gmail')}/>
            </Element>
            <Element>
                <label htmlFor="summary">About</label>
                <textarea rows='2' type="text" id="summary" value={data.summary} onChange={(e)=>handleChange(e.target.value,'summary')}/>
            </Element>
            <Element>
                <label htmlFor="works">Work Experience</label>
                <textarea rows='2' type="text" id="works" value={data.works} onChange={(e)=>handleChange(e.target.value,'works')}/>
            </Element>
            <Element>
                <label htmlFor="education">Education</label>
                <textarea rows='2' type="text" id="education" value={data.education} onChange={(e)=>handleChange(e.target.value,'education')}/>
            </Element>
            <Element>
                <label htmlFor="projects">Projects</label>
                <textarea rows='2' type="text" id="projects" value={data.projects} onChange={(e)=>handleChange(e.target.value,'projects')}/>
            </Element>
            <Element>
                <label htmlFor="skills">General Skills</label>
                <textarea rows='2' type="text" id="skills" value={data.skills} onChange={(e)=>handleChange(e.target.value,'skills')}/>
            </Element>
            <Element>
                <label htmlFor="tech">Tech Skills</label>
                <textarea rows='2' type="text" id="tech" value={data.tech} onChange={(e)=>handleChange(e.target.value,'tech')}/>
            </Element>
            <Element>
                <label htmlFor="interest">Interest</label>
                <textarea rows='2' type="text" id="interest" value={data.interest} onChange={(e)=>handleChange(e.target.value,'interest')}/>
            </Element>
            
            
        </Container>
    )
}

export default pdfMaker
