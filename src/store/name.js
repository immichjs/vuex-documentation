export default {
  namespaced: true,
  state: {
    name: ''
  },
  getters: {
    name: state => state.name
  },
  mutations: {
    setName: state => state.name = 'Mich'
  }
}
