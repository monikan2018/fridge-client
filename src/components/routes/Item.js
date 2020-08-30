import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../Layout'
import messages from '../AutoDismissAlert/messages'
import { show } from '../../api/item'
import apiUrl from '../../apiConfig'
import axios from 'axios'

class Item extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our item state will be null, until the API request finishes
      item: null,
      // initially this item has not been deleted yet
      deleted: false
    }
  }
  componentDidMount () {
    const { user, msgAlert } = this.props
    show(this.props.match.params.id, user)
      .then(res => this.setState({ item: res.data.item }))
      .then(() => msgAlert({
        heading: 'Here you go!',
        message: messages.itemShowSuccess,
        variant: 'success'
      }))
      // .then(() => history.push('/'))
      .catch(error => {
        msgAlert({
          heading: 'Can\'t seem to find that. ' + error.message,
          message: messages.itemShowFailure,
          variant: 'danger'
        })
      })
  }

  destroyItem = (user) => {
    const { msgAlert } = this.props
    axios({
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      // update their `deleted` state to be `true`
      // .then(res => this.setState({ items: res.data.items }))
      .then(() => msgAlert({
        heading: 'Item removed!',
        message: messages.itemDeleteSuccess,
        variant: 'success'
      }))
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
      .catch(error => {
        msgAlert({
          heading: 'Failed to remove item.' + error.message,
          message: messages.itemDeleteFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    // destructure our item property out of state
    const { item, deleted } = this.state

    // if we don't have a item (item is null)
    if (!item) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // redirect to the home page
      return <Redirect to={{
        // Redirect to the home page ('/')
        pathname: '/items',
        // Pass along a message, in state, that we can show
        state: { message: 'Deleted item successfully' }
      }} />
    }

    return (
      <Layout>
        <h4>{item.name}</h4>
        <p>Item: {item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.price}</p>
        <button onClick={this.destroyItem}>Delete Item</button>
        {/* Add a link to the edit item route when you click the edit button */}
        <Link to={`/items/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to='/items'>Back to all items</Link>
      </Layout>
    )
  }
}

export default Item
