export default {
  namespaced: true,
  state: {
    email: ''
  },
  getters: {
    email: state => state.email
  },
  mutations: {
    updateEmail: (state, email) => state.email = email
  }
}
