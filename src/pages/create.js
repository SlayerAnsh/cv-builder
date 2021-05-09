import { Link } from 'gatsby';
import React, { useState } from 'react'
import styled from 'styled-components';
import Editor from '../components/Editor/Editor';
import Maker from '../components/PDF/Maker';
import Viewer from '../components/PDF/Viewer';

export default function Create() {

    const [editing, setEditing] = useState(false);

    return (
        <Container>
            <BackButton to="/">Go Back</BackButton>
            <QuickAccess type='button' onClick={() => setEditing((prev) => !prev)}> {editing ? 'Close' : 'Edit'} </QuickAccess>
            <Viewer />
            <Maker />
            <Editor visible={editing} />
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:30px;
`
const BackButton = styled(Link)`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:5px;
    border:1px solid black;
    position:fixed;
    left:10px;
    top:10px;
    color:black;
`

const QuickAccess = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:5px;
    border:1px solid black;
    position:fixed;
    right:10px;
    bottom:10px;
    color:black;
    z-index:999;
`