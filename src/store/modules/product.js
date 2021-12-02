export default {
    state: () => ({
        products: [],
        categories: []
    }),
    mutations: {
      updateProducts(state) {
        state.products = [1,2,3]
      },
      updateCategories(state) {
        state.categories = [3,2,1]
      }
    }
}