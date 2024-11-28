import instance from "@/utils/request"

export const getAddressList = () => {
    return instance.get('/address/list')
  }