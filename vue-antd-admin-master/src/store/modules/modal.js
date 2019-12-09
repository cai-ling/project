export default {
  namespaced: true,
  state: {
    previewModalVisible: false
  },
  mutations: {
    showPreview (state, pop) {
      debugger
      return (state.previewModalVisible = pop)
    }
    // ,
    // hiddenPreview (state, pop) {
    //   return (state.previewModalVisible = pop)
    // }
  },
  getters: {
    getterCount (state) {
      return state.previewModalVisible
    }
  }
}
