export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    count: state => state.count,
  },
  mutations: {
    add: state => state.count++,
    sub: state => state.count--,
  }
}
