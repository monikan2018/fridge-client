import apiUrl from '../apiConfig'
import axios from 'axios'

export const itemCreate = (items, user) => {
  console.log('inside api-item')
  console.log(user.token)
  return axios({
    headers: {
      'Authorization': `Bearer token=${user.token}`
    },
    url: apiUrl + '/items',
    method: 'POST',
    data: {
      items: {
        name: items.name,
        quantity: items.quantity,
        price: items.price
      }
    }
  })
}
export const index = (items, user) => {
  return axios({
    headers: {
      'Authorization': `Bearer token=${user.token}`
    },
    url: apiUrl + '/items',
    method: 'GET',
    data: {
      items: {
        name: items.name,
        quantity: items.quantity,
        price: items.price
      }
    }
  })
}
