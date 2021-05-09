import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStyle, selectObjects } from '../../../state/slices/objects'
import { selectSelected } from '../../../state/slices/selected'
import { PROPERTIES } from '../../Constants'
import EditorItemTemplate from '../EditorItemTemplate'

export default function StyleEditor() {
    const objects = useSelector(selectObjects)
    const selected = useSelector(selectSelected)
    const dispatch = useDispatch()

    const [style, setStyle] = useState({})

    useEffect(() => {
        if (selected.id) {
            let data = sanitized(style)
            dispatch(addStyle({ data: data, id: selected.id }))
        }
    }, [style, selected.id, dispatch])

    useEffect(()=>{
        let styleNew = objects[selected.id] ? objects[selected.id][PROPERTIES.STYLE] : {}
        setStyle(JSON.stringify(styleNew))
    },[selected])

    if (!objects[selected.id]) {
        return (
            <EditorItemTemplate header="Style">

            </EditorItemTemplate>
        )
    }

    return (
        <EditorItemTemplate header="Style">
            <textarea name="style" rows='10' cols='30' value={style} onChange={(event) => setStyle(event.target.value)} />
        </EditorItemTemplate>
    )
}

const sanitized = (style) => {
    let data = {}
    try {
        data = JSON.parse(style)
    } catch (e) {
    }
    return data;
}
