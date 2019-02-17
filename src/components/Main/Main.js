import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../../actions/news'
import CardItem from '../CardItem/CardItem'
import { List } from '../List/List'
import Loader from '../Loader/Loader'


class Main extends Component {

  componentDidMount() {
    this.props.getArticles()
  }

  render() {
    const { news, isLoading } = this.props

    if (isLoading) {
      return <Loader/>
    }
    return (
      <List>
        {news.map(item => (
          <CardItem key={item.id} data={item}/>
        ))}
      </List>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: () => {
      dispatch(getArticles())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.posts.posts,
    isLoading: state.posts.isLoading,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)

