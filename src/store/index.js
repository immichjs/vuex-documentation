import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import counter from './counter'
import name from './name'
import automaticCounter from './automaticCounter'
import email from './email'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    counter,
    name,
    automaticCounter,
    email,
  },
})
