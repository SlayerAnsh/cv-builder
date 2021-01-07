import React from 'react'
import styled from 'styled-components'

const StyledCont = styled.div`
    display:flex;
    flex-direction:column;
    align-content:stretch;
    justify-content:flex-start;
    margin:10px 30px;
    div {
        display:flex;
        flex-direction:row;
        align-items:stretch;
        justify-content:stretch;
        margin: 10px 0px;
        background-color:#d3d3d3;
        h3 {
            flex: 1 1 15%;
            background-color:#e3e3e3;
            padding: 5px 10px;
        }
        p {
            flex: 1 1 85%;
            padding: 5px 10px;
            span {
                color:red;
                font-weight:700;
            }
        }
    }

`

function format() {
    return (
        <StyledCont>
            <div><h3>NAME</h3><p>No special format. Avoid using special characters.</p></div>
            <div><h3>Profile Links</h3><p>No special format. Remove unnecessary part from url (clean url).</p></div>
            <div><h3>About</h3><p>No specila format. Avoid using special characters.</p></div>
            <div><h3>Work Experience</h3><p>Company Name <span>,,</span> duration <span>,,</span> point A <span>//</span> point B <span>;</span> <br/>(Here points are separated using '//' and different fields are separated using ',,')<br/>( ';' is used to separate one work. Donot rearrange the order) </p></div>
            <div><h3>Education</h3><p>Name of Institute <span>,,</span> duration <span>,,</span> CGPI: 8.88 <span>,,</span> point A <span>//</span> point B <span>;</span> <br/>(Here points are separated using '//' and different fields are separated using ',,')<br/>( ';' is used to separate one experience. Donot rearrange the order) </p></div>
            <div><h3>Projects</h3><p>Name of Projects <span>,,</span> Project Link <span>,,</span> text to be displayed inside [] <span>,,</span> duration <span>,,</span> point A <span>//</span> point B <span>;</span> <br/>(Here points are separated using '//' and different fields are separated using ',,')<br/>( ';' is used to separate one project. Donot rearrange the order) </p></div>
            <div><h3>General Skills</h3><p>Skill Name <span>,,</span> Numeric Value between 0 to 100 for your expertise in given skill <span>;</span><br/>(Here different fields are separated using ',,')<br/>( ';' is used to separate one skill. Donot rearrange the order) </p></div>
            <div><h3>Tech Skills</h3><p>Skill Name <span>,,</span>comma separated skill list <span>;</span><br/>(Here different fields are separated using ',,')<br/>( ';' is used to separate one skill. Donot rearrange the order) </p></div>
            <div><h3>Interest</h3><p>Interest Name <span>;</span><br/>( ';' is used to separate interest) </p></div>
        </StyledCont>
    )
}

export default format
