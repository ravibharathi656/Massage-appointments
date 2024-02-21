import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      enameValue: null
    }
  },
  mutations: {
    setEnameValue(state, value) {
      state.enameValue = value
    }
  },
  actions: {
    setEnameValue({ commit }, value) {
      commit('setEnameValue', value)
    }
  }
})

export default store
