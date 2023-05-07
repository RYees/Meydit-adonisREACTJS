import Axios from 'axios'

// export default class ApiCalling {
//   constructor() {
//     this.http = axios.create({
//       baseURL: 'http://127.0.0.1:3333'
//     })
//   }

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:3333',
    //baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: true
});
  // getUsers = async () => {
  //   return this.http.get(`/users`)
  // }

  // storeUser = async (event) => {
  //   return this.http.post(`/auth/register`, event)
  // }

  // storeUser = async (event) => {
  //   return this.http.post(`/auth/login`, event)
  // }

  // deleteUser = async (id) => {
  //   return this.http.delete(`/posts/${id}`)
  // }

  export default axios;