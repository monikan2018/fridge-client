import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig.js'

import ItemForm from '../ItemForm.js'

const ItemCreate = props => {
  const [createdItemId, setCreatedItemId] = useState(null)
  const [item, setItem] = useState({ name: '', quantity: '', price: '' })

  const handleChange = event => {
    event.persist()

    setItem(prevItem => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedItem = Object.assign({}, prevItem, updatedField)

      return editedItem
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/items`,
      method: 'POST',
      data: { item: item }
    })
      .then(res => setCreatedItemId(res.data.item._id))
      .catch(console.error)
  }

  if (createdItemId) {
    return <Redirect to={`/items/${createdItemId}`} />
  }

  return (
    <ItemForm
      item={item}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath="/"
    />
  )
}

export default ItemCreate
