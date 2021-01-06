import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'



const StyledSideBar = styled.div`
    height:100vh;
    width:20%;
    position:fixed;
    top:0;
    left:0;
    background-color:blue;
    z-index:98;
    padding: 10px 30px;
    overflow-x:hidden;
    color:white;
    background-color:#de354c;
    box-shadow: 2px 0px 25px #de354c;
`
const StyledMain = styled.div`
    margin-left:20%;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:flex-start;
    padding:10px 30px;
    background-color: #f3f3f3;
    min-height:100vh;
`
function layout({children}) {
    
    return (
        <>
        <StyledSideBar>
            <Link to='/google' style={{color:'white',textDecoration:'none'}}>Google</Link>
        </StyledSideBar>
        <StyledMain>
            {children}
        </StyledMain>
        </>
    )
}

export default layout
