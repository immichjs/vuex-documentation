export default {
  namespaced: true,
  state: {
    automaticCounter: 0
  },
  getters: {
    automaticCounter: state => state.automaticCounter
  },
  mutations: {
    startAutomaticCounter: state => state.automaticCounter++
  },
  actions: {
    activateAutomaticCounter: {
      root: true,
      handler ({ commit, state }) {
        let intervalCounter = setInterval(() => {
           state.automaticCounter < 10
            ? commit('startAutomaticCounter', state.automaticCounter)
            : clearInterval(intervalCounter)
        }, 1000)
      }
    }
  } 
}
