import instance from '@/utils/request'

export const getprolist = (obj) => {
    const {categoryId , goodsName , page} = obj
    return instance.get('/goods/list', {
        params:{
            categoryId ,
            goodsName , 
            page
        }
    })
}

export const getprodetail = (goodsId) => {
    return instance.get('/goods/detail',{
        params:{
            goodsId
        }
    })
}

export const getprocomments = (goodsId,limit) => {
    return instance.get('/comment/listRows',{
        params:{
            goodsId,
            limit
        }
    })
}