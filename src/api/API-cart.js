import instance from "@/utils/request"

export const addcart = (goodsId,goodsNum,goodsSkuId) => {
    return instance.post('/cart/add',{
        goodsId,
        goodsNum,
        goodsSkuId
    })
}

//获取购物车
export const getCartList = () => {
    return instance.get('/cart/list')
}

//更新购物车
export const updateList = (goodsId,goodsNum,goodsSkuId) => {
    return instance.post('/cart/update',{
        goodsId,
        goodsNum,
        goodsSkuId
    })
}

//删除
export const delSelect = (cartIds) => {
    return instance.post('/cart/clear',{
        cartIds
    })
}