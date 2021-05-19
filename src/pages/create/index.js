import React from 'react'
import { Button } from 'gatsby-theme-material-ui'

export default function Index() {
    return (
        <div>
            <Button variant="contained" color="primary" to="/create/editor">Editor</Button>
        </div>
    )
}
