import React, { Component } from 'react'
import styles from './Main.module.css'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const stylesBeta = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

class Main extends Component {
  state = {
    items: [],
    spacing: 16,
  }

  getNewsItems = () => {
    try {
      return axios.get('https://newsapi.org/v2/everything?q=movies&apiKey=528fb017ce0c4f3c96e06bfda7644490')
    } catch (e) {
      // throw new Error(e.message)
    }
  }

  componentDidMount() {
    const data = this.getNewsItems()
    data
      .then(items => this.setState({ items: items.data.articles }))
  }

  render() {
    const { items, spacing } = this.state
    const { classes } = this.props
    return (
      <Grid item xs={12} container justify="space-around" spacing={Number(spacing)} style={{ padding: '1rem' }}>
        {items.map(item => (
          <Card className={classes.card} style={{ margin: '1rem', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea style={{ flex: '2' }}>
              <CardMedia
                className={classes.media}
                image={item.urlToImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={item.url}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    )
  }
}

export default withStyles(stylesBeta)(Main)

