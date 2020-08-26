import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Item = props => {

  // call useState to get the `item` state and a `setItem` function to update it
  // the initial value of `item` is `null`
  const [item, setItem] = useState(null)
  const [deleted, setDeleted] = useState(false)
  // Do something when the component first appears on the screen
  // whenever the component is mounted (created and inserted into the DOM)
  // since the dependencies array is empty, this acts like componentDidMount
  useEffect(() => {
    axios(`${apiUrl}/items/${props.match.params.id}`)
      .then(res => setItem(res.data.item))
      .catch(console.error)
  }, [])
  // this.destroy = this.destroy.bind(this)
  const destroy = () => {
    axios({
      url: `${apiUrl}/items/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }
  if (!item) {
    return <p>Loading...</p>
  }
  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Item succesfully deleted!' } }
    } />
  }
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Amount: {item.amount}</p>
      <button onClick={destroy}>Delete Book</button>
      <Link to={`/item/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/items">Back to all items</Link>
    </div>
  )
}
export default Item
