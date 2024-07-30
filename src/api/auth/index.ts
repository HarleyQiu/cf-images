import request from '@/utils/request'

const api_name: string = '/api'

export default {
  login(data: any) {
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data
    })
  }
}
