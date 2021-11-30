<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>Counter: {{counter}}</p>
  <p>Total: {{total}}</p>
  <button @click="actionIncrementApp">Increment</button>
  <button @click="incrementAppWithNumbers">Increment With 10</button>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      dataLocal: 100
    }
  },
  // Không nên sử dụng
  // computed: mapState([
  //     'counter',
  //     'total',
  //     'sum'
  // ])
  computed: {
    dataLocalFormat() {
      return this.dataLocal * 100
    },
    ...mapState([
      'counter',
      'total',
      'sum',
      'aveger'
    ])
    // ...mapState({
    //   counterNumber: state => state.counter,
    //   totalNumber: state => state.total,
    //   sum: state => state.sum,
    //   aveger: state => state.aveger,
    // })
    // counterNumber() {
    //   return this.$store.state.counter
    // },
    // total() {
    //   return this.$store.state.total
    // }
  },
  methods: {
    incrementApp() {
      console.log('Gọi hàm incrementApp trong component App')
      this.increment()
      // this.$store.commit('increment')
    },
    incrementAppWithNumbers() {
      console.log('Gọi hàm incrementAppWithNumbers trong component App')
      this.$store.commit('incrementWithNumber', 10)
    },
    updateObjectUserApp() {
      this.$store.commit('updateObjectUser', {
        name: 'Quang Tran',
        class: 'teacher '
      })
    },
    ...mapMutations([
      'increment',
      'incrementWithNumber',
    ]),
    // ...mapMutations({
    //   incrementNameCustom: 'increment'
    // }),
    actionIncrementApp() {
      this.$store.dispatch('actionIncrement')
    },
    ...mapActions([
      'actionIncrement'
    ])
    // ...mapActions({
    //   actionIncrementCustomName: 'actionIncrement'
    // })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
