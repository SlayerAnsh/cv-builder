import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:stretch;
    padding:10px 30px;
    /* background-color: #f3f3f3; */
    min-height:100vh;
    text-align:center;
`
const Footer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:10px 30px;
    background-color: #f3f3f3;
    text-align:center;
`
function layout({children}) {
    
    return (
        <>
        <StyledMain>
            {children}
        </StyledMain>
        <Footer>
            Created by SlayerAnsh
        </Footer>
        </>
    )
}

export default layout
