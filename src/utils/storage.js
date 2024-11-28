//持久化存储模块
const info_key = 'hm_shopping_info'
const  HISTORY_KEY = 'hm_history_key'

export const getInfo = () => {
    const defaultObj = {token:'',userId:''}
    const result = localStorage.getItem(info_key)
    return result ? JSON.parse(result) : defaultObj
}

export const setInfo = (obj) => {
    localStorage.setItem(info_key,JSON.stringify(obj))
}

export const removeInfo = () => {
    localStorage.removeItem(info_key)
}

export const getHistory = () => {
    const result = localStorage.getItem(HISTORY_KEY)
    return result ? JSON.parse(result) : []
}

export const setHistory = (arr) => {
    localStorage.setItem(HISTORY_KEY,JSON.stringify(arr))
}