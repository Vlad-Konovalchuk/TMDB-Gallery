import { withStyles } from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../routes'
import { POSTER_URL } from '../../urlPath'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

const CardItemTemporary = (props) => {
  const { poster_path, title, vote_average, id } = props.data
  return (
    <Link to={`${ROUTES.MOVIELIST}/${id}`} style={{ color: 'inherit', textDecoration: 'none', margin: '0.5rem' }}>
      <GridListTile key={id} style={{ listStyleType: 'none' }}>
        <img src={POSTER_URL + poster_path} alt={title}/>
        <GridListTileBar
          title={title}
          subtitle={<span>rate: {vote_average}</span>}
        />
      </GridListTile>
    </Link>
  )
}
export default withStyles(styles)(CardItemTemporary)
