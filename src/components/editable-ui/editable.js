import React, { useState, useEffect } from 'react'
import {Text,Link} from '@react-pdf/renderer'

export function EditableText({text,placeholder,type,children,style,childRef}) {
    const [isEditing,setEditing] = useState(false);
    
    const handleKeyDown = (event, type) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey]; 
        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    }

    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
          childRef.current.focus();
        }
    }, [isEditing, childRef]);

    return (
        isEditing?(
            <div
            style={style}
            onBlur={(e) => {
                if(!e.currentTarget.contains(e.relatedTarget))
                    setEditing(false)
            }}
            onKeyDown={e => handleKeyDown(e, type)}>
                {children}
            </div>
        ):(
            <Text style={style} onClick={()=>setEditing(true)}>{text||placeholder}</Text>
        )
    )
}

export function EditableLink({web,src,text,placeholder,type,children,style,childRef}) {
    const [isEditing,setEditing] = useState(false);
    const handleKeyDown = (event, type) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey]; 
        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    }

    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
          childRef.current.focus();
        }
    }, [isEditing, childRef]);

    return (
        isEditing?(
            <div
            style={style}
            onBlur={(e) => {
                if(!e.currentTarget.contains(e.relatedTarget))
                    setEditing(false)
            }}
            onKeyDown={e => handleKeyDown(e, type)}>
                {children}
            </div>
        ):(
            web?
            <span style={style} onClick={()=>setEditing(true)}>{text||placeholder}</span>:
            <Text style={style}onClick={()=>setEditing(true)}><Link src={src}>{text||placeholder}</Link></Text>
        )
    )
}