import axios from 'axios'
import { baseURL } from '../config'
import QS from 'qs'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      timeout: 15000,
    }
    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      console.log('config:', config)
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      return config
    }, err => {
      console.log(err)
      return Promise.reject(err)
    })

    instance.interceptors.response.use(response => {
      this.destroy()
      const { data , status } = response
      console.log(response)
      return { data, status }
    }, err => {
      this.destroy()
      return Promise.reject(err)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    if(typeof options.method !== undefined && options.method.toLowerCase() === 'post'){
      options.data = QS.stringify(options.data)
    }
    return instance(options)
  }
}



export default HttpRequest
