const state = {
  userName: 'lux'
}
const getters = {
  firstLetter: state => state.userName.substr(0, 1)
}
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
