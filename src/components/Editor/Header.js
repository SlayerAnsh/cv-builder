import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import CloudUploadSharpIcon from '@material-ui/icons/CloudUploadSharp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        borderRadius: 0,
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    appBar: {
        background: '#21BDCA',
        color: 'black',
        boxShadow: 'none'
    }
}));
export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar variant='dense'>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" disableFocusRipple>
                        <ArrowBackSharpIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" disableFocusRipple>
                        <NoteAddSharpIcon />
                        <ExpandMoreSharpIcon fontSize='small' />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" disableFocusRipple>
                        <EditSharpIcon />
                        <ExpandMoreSharpIcon fontSize='small' />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>

                    </Typography>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" disableFocusRipple>
                        <CloudUploadSharpIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" disableFocusRipple>
                        <VisibilitySharpIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" disableFocusRipple>
                        <Typography>100%</Typography>
                        <ExpandMoreSharpIcon fontSize='small' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
