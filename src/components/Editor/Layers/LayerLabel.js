import { makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSelected } from '../../../state/slices/layerSelect'
import { updateObject } from '../../../state/slices/objects'
import { PROPERTIES } from '../../Constants'

const useStyles = makeStyles((theme) => ({
    root: {

    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: theme.spacing(1)
    },
    input: {
        padding: theme.spacing(0.5),
        background: 'transparent',
        color: theme.palette.text.primary,
        border: 'none',
        outline: 'none',
        minWidth: '5px',
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        flexGrow: 1,
        marginRight: '3px'
    }
}))

export default function LayerLabel({ id, name, type }) {
    const dispatch = useDispatch()
    const classes = useStyles()

    const [editing, setEditing] = useState(false)

    const handleContextItemClick = (event, id) => {
        event.preventDefault();
        dispatch(setSelected({ id: id, type: type }))
    }

    const handleNameChange = (event) => {
        let value = event.target.value
        dispatch(updateObject({ id: id, key: PROPERTIES.NAME, data: value }))
    }

    const handleBlur = () => {
        setEditing(false)
    }

    const handleDoubleClick = (event) => {
        event.preventDefault()
        setEditing(true)
    }

    return (
        <div className={classes.label}
            onContextMenu={(event) => handleContextItemClick(event, id)}
            style={{ cursor: 'context-menu' }}
        >
            <div onDoubleClick={handleDoubleClick}>
                {editing ?
                    <input autoFocus type='text'
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleBlur}
                        className={classes.input}
                        size='1'
                        placeholder={type}
                    />
                    :
                    <Typography>
                        {name || type}
                    </Typography>
                }
            </div>
            <div style={{ fontSize: '10px' }}>{id}</div>
        </div>

    )
}
