import { Grid } from '@material-ui/core'
import React from 'react'
import Header from '../../components/Editor/Header'
import Left from '../../components/Editor/Left'
import Pannel from '../../components/Editor/Pannel'


export default function Editor() {
    return (
        <Grid container >
            <Header />
            <Grid item xs={2}>
                <Pannel>
                    <Left />
                </Pannel>
            </Grid>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={2}>
                <Pannel>

                </Pannel>
            </Grid>

        </Grid>
    )
}
