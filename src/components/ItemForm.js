import React from 'react'
import { Link } from 'react-router-dom'

const ItemForm = ({ items, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      placeholder="Item Name"
      value={item.name}
      name="name"
      onChange={handleChange}
    />

    <label>Quantity</label>
    <input
      placeholder="Quantity"
      value={item.quantity}
      name="quantity"
      onChange={handleChange}
    />

    <label>Price</label>
    <input
      placeholder="Price"
      value={item.price}
      name="price"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ItemForm
