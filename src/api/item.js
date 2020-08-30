import apiUrl from '../apiConfig'
import axios from 'axios'

export const itemCreate = (item, user) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/items',
    method: 'POST',
    data: {
      item: {
        name: item.name.toLowerCase(),
        quantity: item.quantity,
        price: item.price
      }
    }
  })
}
export const index = (item, user) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/items/',
    method: 'GET',
    data: {
      item: {
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }
    }
  })
}
export const show = (id, user) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/items/' + id,
    method: 'GET'
  })
}
// export const delete = (id, user) => {
//   return axios({
//     headers: {
//       'Authorization': `Bearer token=${user.token}`
//     },
//     url: apiUrl + '/items',
//     method: 'DELETE',
//   })
// }
export const editItem = (id, user, item) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/items/' + id,
    method: 'PATCH',
    data: {
      item: {
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }
    }
  })
}
