import {getInfo , setInfo} from '@/utils/storage'

export default {
    namespaced:true,
    state () {
        return {
            //个人相关信息
            userInfo:getInfo()
        }
    },
    mutations:{
        setuserInfo(state,obj){
            state.userInfo = obj
            setInfo(obj)
        }
    },
    actions:{
        logout (context) {
            context.commit('setUserInfo', {})
            context.commit('cart/setCartList', [], { root: true })
          }
    },
    getters:{}
}