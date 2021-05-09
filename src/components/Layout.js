import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'


export default function Layout({ children }) {
    return (
        <Container>
            <GlobalStyle />
            {children}
        </Container>
    )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        padding:0px;
        margin:0px;
        border:none;
        text-decoration:none;
        line-height:1.6;
    }
`

const Container = styled.div`
    background-color: white;
    min-height:100vh;
    min-width:100vw;
    display:flex;
    flex-direction:column;
    padding:30px 10px 10px 10px;
`