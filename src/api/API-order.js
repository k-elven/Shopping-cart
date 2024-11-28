import instance from '@/utils/request'

export const checkOrder = (mode, obj) => {
  return instance.get('/checkout/order', {
    params: {
      mode,
      delivery: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

//订单确认
export const submitOrder = (mode, params) => {
  return instance.post('/checkout/submit', {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    ...params
  })
}


export const getMyOrderList = (dataType, page) => {
  return instance.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
