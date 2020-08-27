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
  // console.log(props, 'this is show')
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
export const editItem = (user, itemId, item) => {
  // const itemId = item._id
  // console.log(item._id)
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    // ** DO WE NEED TO PASS IN ID? IF SO, HOW?
    url: apiUrl + '/items/' + itemId,
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
