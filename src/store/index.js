import Vue from 'vue'
import Vuex from 'vuex'

// 导入global
import global from "./modules/global"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        global,
    }
})
