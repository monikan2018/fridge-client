import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { index } from '../../api/item'
import messages from '../AutoDismissAlert/messages'
import Layout from '../../components/Layout'
class Items extends Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
  }
  // handleChange = event => setState({
  //   [event.target.name]: event.target.value
  // })
  componentDidMount () {
    const { user, msgAlert } = this.props
    index(this.state, user)
      .then(res => this.setState({ items: res.data.items }))
      .then(() => msgAlert({
        heading: 'Item Show Success',
        message: messages.itemIndexSuccess,
        variant: 'success'
      }))
      // .then(() => history.push('/'))
      .catch(error => {
        msgAlert({
          heading: 'Item index Failed with error: ' + error.message,
          message: messages.ItemIndexFailure,
          variant: 'danger'
        })
      })
  }

  render () {
  // const { name, quantity, price } = this.state
    const items = this.state.items.map(item => (
      <li key={item._id}>
        <Link to={`/items/${item._id}`}>
          {item.name}
        </Link>
      </li>
    ))
    return (
      <Layout>
        <h4>Items</h4>
        <ul>
          {items}
        </ul>
      </Layout>
    )
  }
}

export default withRouter(Items)
