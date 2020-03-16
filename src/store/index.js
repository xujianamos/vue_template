import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 导入单独的模块
import login from './modules/login'

Vue.use(Vuex)

const state = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    logina: login
  }
})
