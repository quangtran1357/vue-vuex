export default {
    namespaced: true,
    state: () => ({
        carts: []
    }),
    mutations: {
        updateCarts(state) {
            state.carts = [1,2,3]
        }
    },
    actions: {
        actionUpdateCarts({commit}) {
            commit('updateCarts')
        }
    },
    modules: {
        cartDetail: {
            namespaced: true,
            state: () => ({
                name: ''
            }),
            mutations: {
                updateCartDetail(state) {
                    state.name = 'cartDetailName'
                }
            }
        }
    }
}