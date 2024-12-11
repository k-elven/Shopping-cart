import instance from "@/utils/request"

//收货地址列表
export const getAddressList = () => {
    return instance.get('/address/list')
}

//添加地址
export const getAddressRegion = () => {
  return instance.get('/region/tree')
}

//默认选择收货地址id
export const getAddressDefault = () => {
  return instance.get('/address/defaultId')
}

//默认收获地址
export const getAddDefault = (addressId) => {
  return instance.post('/address/setDefault',{
    addressId
  })
}

//获取省市区
export const getAdressPCR = () => {
  return instance.get('/region/tree')
}

//添加收货地址
export const addAddressLists = (name,phone,region) => {
  return instance.post('/address/add',{
    form:{
      name,
      phone,
      region
    }
  })
}