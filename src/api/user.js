import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/user/getUserInfo',
    method: 'get',
    data: {
      userId
    }
  })
}
