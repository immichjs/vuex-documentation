import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import counter from './counter'
import name from './name'
import automaticCounter from './automaticCounter'
import email from './email'
import { changeColorMutation } from './changeColor'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    color: 'red'
  },
  mutations: changeColorMutation,
  getters: {
    color: state => state.color
  },
  modules: {
    counter,
    name,
    automaticCounter,
    email,
  },
  // devtools: false
})

if (module.hot) {
  module.hot.accept(['./changeColor', './counter', './automaticCounter', './email', './name'], () => {
    const moduleCounter = require('./counter').default
    const moduleAutomaticCounter = require('./automaticCounter').default
    const moduleName = require('./name').default
    const moduleEmail = require('./email').default

    const changeColorMutation = require('./changeColor').default

    store.hotUpdate({
      mutations: changeColorMutation,
      modules: {
        moduleCounter,
        moduleAutomaticCounter,
        moduleName,
        moduleEmail
      }
    })
  })
}
