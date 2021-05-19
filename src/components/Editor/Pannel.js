import { makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        overflow: 'auto',
        background: theme.palette.primary.main,
        paddingTop: theme.spacing(1),
        minWidth: '200px',
        display: 'flex',
        flexDirection: 'column',
    }
}))

export default function Pannel({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Toolbar variant='dense' />
            {children}
        </div>
    )
}
