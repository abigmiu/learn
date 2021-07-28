import axios from 'axios'

axios.defaults.baseURL = ''
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  (config) => config,
  (err) => {
    console.log('requests error')
    console.log(err)
    return err
  }
)

axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return err
  }
)

export default {}
