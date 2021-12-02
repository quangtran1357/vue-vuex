<template>
    <div class="vuex-modules">
        <h1>Vuex Modules</h1>
        <button @click="updateProducts">Update Products</button>
        <button @click="updateCarts">Update Carts</button>
        <button @click="updateCartDetail">Update Cart Detail</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'VuexModules',
    computed: {
        products() {
            return this.$store.state.product.products
        },
        ...mapState('cart', {
            dataCarts: state => state.carts
        })
    },
    mounted() {
        console.log(this.$store)
    },
    methods: {
        updateProducts() {
            this.$store.commit('updateProducts')
        },
        // updateCarts() {
        //     // this.$store.commit('updateCarts')
        //     this.$store.commit('cart/updateCarts')
        // },
        actionUpdateCarts() {
            this.$store.dispatch('cart/actionUpdateCarts')
        },
        ...mapMutations('cart', [
            'updateCarts',
        ]),
        // ...mapMutations('cart', {
        //     componentUpdateCart: 'updateCarts'
        // }),
        ...mapActions('cart', [
            'actionUpdateCarts'
        ]),
        // ...mapActions('cart', {
        //     componentActionUpdateCarts: 'actionUpdateCarts'
        // }),
        ...mapMutations('cart/cartDetail', [
            'updateCartDetail'
        ])
    }
}
</script>
