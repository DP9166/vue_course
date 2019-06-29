import Mock from 'mockjs'

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'duan',
    'name|5': 'hello'
  }
  return Mock.mock(template)
}
