import apiUrl from '../apiConfig'
import axios from 'axios'

export const itemCreate = (item, user) => {
  console.log('inside api-item')
  console.log(user.token)
  console.log(item)
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/items',
    method: 'POST',
    data: {
      item: {
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }
    }
  })
}
export const index = (items, user) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
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
export const show = (id, items, user) => {
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
// export const delete = (id, user) => {
//   return axios({
//     headers: {
//       'Authorization': `Bearer token=${user.token}`
//     },
//     url: apiUrl + '/items',
//     method: 'DELETE',
//   })
// }
// export const update = (id,items, user) => {
//   return axios({
//     headers: {
//       'Authorization': `Bearer token=${user.token}`
//     },
//     url: apiUrl + '/items',
//     method: 'PATCH',
//     data: {
//       items: {
//         name: items.name,
//         quantity: items.quantity,
//         price: items.price
//       }
//     }
//   })
// }
