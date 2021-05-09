import React from 'react'
import styled from 'styled-components'

export default function EditorItemTemplate({ header, children }) {
    return (
        <Container>
            <Header>
                <p>{header}</p>
            </Header>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:stretch;
`

const Header = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:5px;
    color:white;
    font-weight:bold;
    background-color:green;
`