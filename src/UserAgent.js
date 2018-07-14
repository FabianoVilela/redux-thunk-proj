import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUA } from './actions'

export class UserAgent extends Component {
  componentDidMount () {
    this.props.loadData()
  }
  render () {
    if(this.props.isFetching) {
      return <span>Loading...</span>
    }
    if (this.props.error) {
      return <span>Error</span>
    }
    return <p><strong>User-agent:</strong> {this.props.data['user-agent']}</p>
  }
}
const mapSateToProps = (state) => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadUA())
  }
}
export default connect(mapSateToProps, mapDispatchToProps) (UserAgent)
