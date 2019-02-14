import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const CardItem = (props) => {
  const { urlToImage, title, description, url } = props.data
  return (
    <Card style={{ margin: '1rem', display: 'flex', flexDirection: 'column', maxWidth: '315px' }}>
      <CardActionArea style={{ flex: '2' }}>
        <CardMedia
          style={{ height: '140px' }}
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={url}>
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}
export default CardItem
