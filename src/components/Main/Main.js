import React, { PureComponent } from 'react'
import CardItem from '../CardItem/CardItem'
import { List } from '../List/List'
import Loader from '../Loader/Loader'
import axios from 'axios'


class Main extends PureComponent {
  state = {
    items: [],
    spacing: 16,
    loading: false,
  }

  getNewsItems = () => {
    try {
      this.setState({ loading: true })
      return axios.get('https://newsapi.org/v2/everything?q=movies&apiKey=528fb017ce0c4f3c96e06bfda7644490')
    } catch (e) {
      // throw new Error(e.message)
    } finally {
      this.setState({ loading: false })
    }
  }

  componentDidMount() {
    const data = this.getNewsItems()
    data
      .then(items => this.setState({ items: items.data.articles }))
  }

  render() {
    const { items, loading } = this.state
    const { classes } = this.props

    if (loading) {
      return <Loader/>
    }
    return (
      <List>
        {items.map(item => (
          <CardItem key={item.id} data={item}/>
        ))}
      </List>
    )
  }
}

export default Main;

