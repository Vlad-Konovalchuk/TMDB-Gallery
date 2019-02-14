import React, { Component } from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { createSearch } from '../../actions/search'
import CardItemTemporary from '../../components/CardItem/CardItemTemporary'
import { List } from '../../components/List/List'
import Loader from '../../components/Loader/Loader'

class SearchResultsContainer extends Component {

  componentDidMount() {
    const values = queryString.parse(this.props.location.search).query
    this.props.searchReducer(values)
  }

  render() {
    const { data, isLoading } = this.props
    if (isLoading) return <Loader/>
    return (
      <List>
        {data.map(item => <CardItemTemporary data={item}/>)}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.search.data,
    isLoading: state.search.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchReducer: query => {
      dispatch(createSearch(query))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)
