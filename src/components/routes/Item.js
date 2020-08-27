import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../../shared/Layout'

// import the api's url
import apiUrl from '../../apiConfig'

// Import axios so we can make HTTP requests
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

  // runs when the component appears (is created and inserted into DOM)
  componentDidMount () {
    // make a request to get the item, with the current routes'id
    axios(`${apiUrl}/items/${this.props.match.params.id}`)
      // set the `item` state to the `item` data we got back from the response (res.data.item)
      .then(res => this.setState({ item: res.data.item }))
      .catch(console.error)
  }

  destroyItem = () => {
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      // update their `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
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
        pathname: '/',
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
        <button onClick={this.destroyBook}>Delete Book</button>
        {/* Add a link to the edit item route when you click the edit button */}
        <Link to={`/item/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to='/items'>Back to all items</Link>
      </Layout>
    )
  }
}

export default Item
