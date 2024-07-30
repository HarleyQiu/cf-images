import request from '@/utils/request'

const api_name: string = '/api'

export default {
  /**
   * 判断账号密码是否正确
   * @param data
   */
  login(data: any) {
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data
    })
  },
  /**
   * 获取用户信息
   */
  getUserInfo() {
    return request({
      url: `${api_name}/user`,
      method: 'get'
    })
  }
}
