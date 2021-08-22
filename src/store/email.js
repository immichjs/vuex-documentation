export const getters = {
  email: state => state.email
}

export const mutations = {
  updateEmail: (state, email) => state.email = email
}

export default {
  namespaced: true,
  state: {
    email: ''
  },
  getters,
  mutations
}
