import React from 'react'
import { makeStyles, Menu, MenuItem, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menuList: {
        background: theme.palette.secondary.main,
        color: 'black'
    },
}))

export default function LayerMenu({ open, handleClose }) {
    const classes = useStyles()
    return (
        <>
            <Menu
                keepMounted
                open={open.mouseY !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    open.mouseY !== null && open.mouseX !== null
                        ? { top: open.mouseY, left: open.mouseX }
                        : undefined
                }
                classes={{
                    list: classes.menuList
                }}
            >
                <MenuItem onClick={handleClose} dense>Copy</MenuItem>
                <MenuItem onClick={handleClose} dense >Delete</MenuItem>
                <MenuItem onClick={handleClose} dense>Hide/Unhide</MenuItem>
                <MenuItem onClick={handleClose} dense disabled>Add to assets</MenuItem>
                <MenuItem onClick={handleClose} dense>Rename</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} dense>Move Up</MenuItem>
                <MenuItem onClick={handleClose} dense>Move Down</MenuItem>
            </Menu>
        </>
    )
}
