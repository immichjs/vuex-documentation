export const mutations = {
  startAutomaticCounter: state => state.automaticCounter++
}

export const actions = {
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

export const getters = {
  automaticCounter: state => state.automaticCounter
}

export default {
  namespaced: true,
  state: {
    automaticCounter: 0
  },
  getters,
  mutations,
  actions
}
