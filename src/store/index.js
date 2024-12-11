import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import address from './modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    token(state) {
      return state.user.userInfo.token
    }
  },
  modules: {
    user,
    cart,
    address
  }
})
