//持久化存储模块
const info_key = 'hm_shopping_info'
const  HISTORY_KEY = 'hm_history_key'

//获取用户的token和userId
export const getInfo = () => {
    const defaultObj = {token:'',userId:''}
    const result = localStorage.getItem(info_key)
    return result ? JSON.parse(result) : defaultObj
}
//将用户的toke进行本地化存储
export const setInfo = (obj) => {
    localStorage.setItem(info_key,JSON.stringify(obj))
}
//移除用户token
export const removeInfo = () => {
    localStorage.removeItem(info_key)
}
//得到历史记录
export const getHistory = () => {
    const result = localStorage.getItem(HISTORY_KEY)
    return result ? JSON.parse(result) : []
}
//设置历史记录
export const setHistory = (arr) => {
    localStorage.setItem(HISTORY_KEY,JSON.stringify(arr))
}