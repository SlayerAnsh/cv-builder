import React from 'react'
import Layer from './Layer'
import EditorItemTemplate from '../EditorItemTemplate'

export default function LayerEditor() {
    return (
        <EditorItemTemplate header="Layer">
            <Layer id={null} level={0}/>
        </EditorItemTemplate>
    )
}

