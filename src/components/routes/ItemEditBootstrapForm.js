import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { editItem } from '../../api/item'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Layout from '../../components/Layout'

class ItemEdit extends Component {
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

  onItemEdit = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    editItem(this.props.match.params.id, user, this.state)
      .then(() => msgAlert({
        heading: 'Updated!',
        message: messages.itemEditSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/items'))
      .catch(error => {
        this.setState({ name: '', quantity: '', price: '' })
        msgAlert({
          heading: 'Item hasn\'t changed! ' + error.message,
          message: messages.ItemEditFailure,
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
            <h3>Edit Item</h3>
            <Form onSubmit={this.onItemEdit}>
              <Form.Group controlId="name">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  // required
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
                  // required
                  name="quantity"
                  value={quantity}
                  type="number"
                  min='0'
                  placeholder="Quantity"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  // required
                  name="price"
                  value={price}
                  type="number"
                  min='0'
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

export default withRouter(ItemEdit)
