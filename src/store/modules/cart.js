import {getCartList , updateList ,delSelect} from '@/api/API-cart'
import { Toast } from 'vant'
export default {
    namespaced:true,
    state(){
        return {
            cartList:[]
        }
    },
    mutations:{
        setCartList (state,newList){
            state.cartList = newList
        },
        danxuan(state,goodsId){
          // console.log(goodsId);
          const goods = state.cartList.find(item => item.goods_id === goodsId)
          goods.isChecked = !goods.isChecked
        },
        //大控制小
        quanxuan(state,flag) {
          state.cartList.forEach(item => {
            item.isChecked = flag
          })
        },
        changeCount(state,{goodsid,goodsnum}) {
          const goods = state.cartList.find(item => item.goods_id === goodsid)
          goods.goods_num = goodsnum
        }
    },
    actions:{
        async getCartActions(context){
            const {data} = await getCartList() 
            data.list.forEach(item => {
                item.isChecked = true
            })
            context.commit('setCartList',data.list)
        },
        async changeCounActionst(context,obj){
          const {goodsnum,goodsid,goodssku} = obj
          context.commit('changeCount',{
            goodsid,
            goodsnum
          })
          await updateList(goodsid,goodsnum,goodssku)
        },
        async delAction(context){
          const delList = context.getters.selCartList
          const delListID = delList.map(item => item.id)
          await delSelect(delListID)
          Toast('删除成功')
          context.dispatch('getCartActions')
        }
    },
    getters: {
        cartTotal (state) {
          return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
        },
        selCartList (state) {
          return state.cartList.filter(item => item.isChecked)
        },
        selCount (state, getters) {
          return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0)
        },
        selPrice (state, getters) {
          return getters.selCartList.reduce((sum, item) => {
            return sum + item.goods_num * item.goods.goods_price_min
          }, 0).toFixed(2)
        },
        //小控制大
        isAllChecked(state){
          return state.cartList.every(item => item.isChecked)
        }
      }
}