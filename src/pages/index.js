import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from 'gatsby-theme-material-ui'

export default function Index() {
  return (
    <div>
      <Typography>
        <Button variant="outlined" to="/create">Create Page</Button>
      </Typography>
    </div>
  )
}
