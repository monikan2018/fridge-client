import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { itemCreate } from '../../api/item'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Layout from '../../components/Layout'

class ItemCreate extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      quantity: '',
      price: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onItemCreate = event => {
    event.preventDefault()

    const { msgAlert, user } = this.props

    itemCreate(this.state, user)
      .then(() => msgAlert({
        heading: 'Item Create Success',
        message: messages.itemCreateSuccess,
        variant: 'success'
      }))
      // .then(() => history.push('/items'))
      .then(() => this.setState({ name: '', quantity: '', price: '' }))
      .catch(error => {
        this.setState({ name: '', quantity: '', price: '' })
        msgAlert({
          heading: 'Item Creation Failed with error: ' + error.message,
          message: messages.ItemCreationFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, quantity, price } = this.state

    return (
      <Layout>
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h3>Item Create</h3>
            <Form onSubmit={this.onItemCreate}>
              <Form.Group controlId="name">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter Item Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  required
                  name="quantity"
                  value={quantity}
                  type="number"
                  placeholder="Quantity"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  name="price"
                  value={price}
                  type="number"
                  placeholder="Price"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRouter(ItemCreate)
