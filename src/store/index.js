import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1,
    total: 10,
    sum: 100,
    aveger: 0.001,
    user: {
      name: 'Quang',
      class: 'teacher'
    }
  },
  mutations: {
    increment(state) {
      console.log('Gọi mutation increment để tăng counter +1')
      state.counter++
    },
    incrementWithNumber(state, n) {
      console.log('Gọi mutation incrementWithNumber để tăng counter with numbers', n)
      state.counter += n
    },
    updateObjectUser(state, payload) {
      state.user.name = payload.name
      state.user.class = payload.name
    }
  },
  actions: {
    actionIncrement(context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
