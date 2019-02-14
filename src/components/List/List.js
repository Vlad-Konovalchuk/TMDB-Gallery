import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from './List.scss'

export const List = (props) => (
  <Grid item xs={12} style={{ padding: '1rem' }} container justify="flex-start" spacing={Number(16)}>
    {props.children}
  </Grid>
)
