export const getters = {
  name: state => state.name
}

export const mutations = {
  setName: state => state.name = 'Mich'
}

export default {
  namespaced: true,
  state: {
    name: ''
  },
  getters,
  mutations
}
