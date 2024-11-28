import instance from "@/utils/request"

//获取首页数据
export const getHome = () => {
    return instance.get('/page/detail',{
        params:{
            pageId:0
        }
    })
}