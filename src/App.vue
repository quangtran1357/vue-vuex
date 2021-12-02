<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>Counter: {{counter}}</p>
  <p>Total: {{total}}</p>
  <p>User name: {{userName}}</p>
  <p>User class: {{userClass}}</p>
  <button @click="actionIncrementApp">Increment</button>
  <button @click="incrementAppWithNumbers">Increment With 10</button>
  <br>
  <button @click="actionUpdateDataAPI">Update Data API</button>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
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
    user() {
      return this.$store.state.user;
    },
    ...mapState([
      'counter',
      'total',
      'sum',
      'aveger'
    ]),
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
    // userName() {
    //   return this.$store.getters.userName
    // },
    // userClass() {
    //   return this.$store.getters.userClass
    // },
    ...mapGetters([
      'userName',
      'userClass'
    ])
    // ...mapGetters({
    //   userNameFormat: 'userName'
    // })
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
      'mutationUpdateDataApi'
    ]),
    // ...mapMutations({
    //   incrementNameCustom: 'increment'
    // }),
    actionIncrementApp() {
      this.$store.dispatch('actionIncrement')
    },
    ...mapActions([
      'actionIncrement',
      'actionUpdateDataAPI'
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
