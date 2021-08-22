export const mutations = {
  add: state => state.count++,
  sub: state => state.count--,
}

export const getters = {
  count: state => state.count,
}

export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters,
  mutations
}
