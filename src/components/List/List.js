import React from 'react'
import Grid from '@material-ui/core/Grid'

export const List = (props) => (
  <Grid item xs={12} style={{ padding: '1rem' }} container justify="space-around" spacing={Number(16)}>
    {props.children}
  </Grid>
)
