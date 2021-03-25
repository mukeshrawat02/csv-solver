import React from 'react'
import MUIAppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    letterSpacing: '-0.02em',
  },
}))

export const AppBar: React.FC = () => {
  const classes = useStyles()
  return (
    <MUIAppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          InTech Assessment
        </Typography>
      </Toolbar>
    </MUIAppBar>
  )
}