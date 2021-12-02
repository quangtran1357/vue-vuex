import { createStore } from 'vuex'
import cart from './modules/cart'
import product from './modules/product'

export default createStore({
  state: {
    counter: 1,
    total: 10,
    sum: 100,
    aveger: 0.001,
    user: {
      name: 'Quang',
      class: 'teacher'
    },
    dataApi: null,
    numbers: [1,2,3,4,5]
  },
  getters: {
    userName: (state) => state.user.name, // return state.user.name
    userClass: (state) => {
      return state.user.class
    },
    numbersFormat: (state) => {
      return state.numbers.map(number => number * 2)
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
    },
    updateDataAPI(state) {
      state.dataApi = 100
    }
  },
  actions: {
    actionIncrement(context) {
      context.commit('increment')
    },
    actionUpdateDataAPI({commit}) { // const {commit} = context
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('updateDataAPI')
          resolve();
        }, 1000)
      })
    }
  },
  modules: {
    cart,
    product
  }
})
