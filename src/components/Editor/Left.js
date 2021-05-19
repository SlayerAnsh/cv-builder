import { Button, Divider, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectLayerSelect } from '../../state/slices/layerSelect';
import Assets from './Assets/Assets';
import Layer from './Layers/Layer';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    item: {
        flexShrink: 0
    },
    notActive: {
        color: theme.palette.primary.light
    },
}))


const Menus = [
    {
        name: 'Layers',
        component: <Layer />
    },
    {
        name: 'Assets',
        component: <Assets />
    },
]

export default function Left() {

    const classes = useStyles();
    const [active, setActive] = useState(Menus[0].name)

    const selected = useSelector(selectLayerSelect)

    const MenuList = Menus.map((menu) => {
        let className = ''
        if (menu.name !== active) {
            className = classes.notActive
        }
        return (
            <Grid item xs={4} key={menu.name}>
                <Button variant='text' className={className}
                    onClick={() => setActive(menu.name)}
                    size='small'
                    disableFocusRipple
                >
                    {menu.name}
                </Button>
            </Grid>
        )
    })

    const ComponentList = Menus.map((menu) => {
        let display = 'none';
        if (menu.name === active) {
            display = 'flex'
        }
        return (
            <Grid item xs={12} style={{ display: display }} key={menu.name}>
                {menu.component}
            </Grid>
        )
    })

    return (
        <Grid container spacing={1}>
            <Grid item container xs={12} spacing={1} style={{ padding: '0px 10px' }}>
                {MenuList}
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                {ComponentList}
            </Grid>
            <Grid item xs={12}>
                {JSON.stringify(selected)}
            </Grid>
        </Grid>
    )
}

