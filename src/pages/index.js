import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const StyledHeading = styled.h1`
    font-size:48px;
`
const StyledList = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:stretch;
    .cont {
        position:relative;
        width: 20vw;
        min-width:250px;
        margin: 40px 20px;
        display:flex;
        flex-direction:column;
    }
    .img{
        overflow:hidden;
        background-color:#f3f3f3;
        height:20vw;
        min-height:250px;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    a {
        text-decoration:none;
        color:green;
        font-size:14px;
    }
    p {
        padding: 0px 10px;
        margin-bottom:10px;
        line-height:1.4;
    }
    .link {
        text-decoration:none;
        color:white;
        position:absolute;
        top:10px;
        right:10px;
        padding:10px 10px;
        background-color:green;
        border-radius:50%;
        opacity:0.7;
        :hover{
            opacity:1;
        }
    }
`

const items = [
    {
        name:'General',
        creator:'Slayer Ansh',
        creatorLink:'/SlayerAnsh',
        image:'#',
        link:'/general',
        about:'Simple Design with input blocks for data'
    },
    {
        name:'Editable UI',
        creator:'Slayer Ansh',
        creatorLink:'/SlayerAnsh',
        image:'#',
        link:'/editable-ui',
        about:'More advance builder with inline Editable UI'
    },
]

const colors = ['#e76f51','#2a9d8f','#264653','#e9c46a','#f4a261']

function index() {
    return (
        <Layout>
            <main>
                <title>CV Builder</title>
            </main>
            <StyledHeading>
                CV BUILDER
            </StyledHeading>
            <p>An opensource project for making resume using react and react-pdf</p>
            <StyledList>
                {items.map((item,index)=>{
                    return (
                        <div className="cont" style={{boxShadow:`0px 0px 15px 2px ${colors[Math.floor(Math.random()*colors.length)]}`}}>
                            <div className="img">
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <h3>{item.name}</h3>
                            <a href={'https://github.com/'+ item.creatorLink}>{item.creator}</a>
                            <p>{item.about}</p>
                            <Link className='link' to={item.link}>USE</Link>
                        </div>
                    )
                })}
            </StyledList>
        </Layout>
    )
}

export default index
