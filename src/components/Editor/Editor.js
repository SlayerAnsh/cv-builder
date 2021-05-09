import React from 'react'
import styled from 'styled-components'
import LayerEditor from './LayerEditor/LayerEditor'
import NodeEditor from './NodeEditor/NodeEditor'
import StyleEditor from './StyleEditor/StyleEditor'
import CopyEditor from './CreateEditor/CreateEditor'

export default function Editor({visible}) {

    if(!visible){
        return null;
    }
    
    return (
        <>
            <LeftPannel>
                <LayerEditor />
            </LeftPannel>
            <RightPannel>
                <NodeEditor />
                <CopyEditor/>
                <StyleEditor />
            </RightPannel>
        </>
    )
}

const LeftPannel = styled.div`
    position:fixed;
    left:0px;
    top:0px;
    display:flex;
    flex-direction:column;
    background-color:#f2f2f2ff;
    height:100%;
    min-width:20vw;
    max-width:30vw;
    align-items:stretch;
    overflow-y:auto;
`
const RightPannel = styled.div`
    position:fixed;
    right:0px;
    top:0px;
    display:flex;
    flex-direction:column;
    min-width:20vw;
    max-width:30vw;
    background-color:#f2f2f2cc;
    height:100%;
    align-items:stretch;
    overflow-y:auto;
`