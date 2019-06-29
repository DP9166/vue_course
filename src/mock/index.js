import Mock from 'mockjs'

import { getUserInfo } from './response/user'

Mock.mock(/\/getUserInfo/, 'get', getUserInfo)


export default Mock
