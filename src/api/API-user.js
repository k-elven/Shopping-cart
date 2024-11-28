import instance from '@/utils/request'

// 获取个人信息
export const getUserInfoDetail = () => {
    return instance.get('/user/info')
  }