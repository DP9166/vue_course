<template>
  <div>
    <d-input v-model="stateValue"/>
    <p>{{ stateValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <!-- <d-show :content="inputValue"/> -->
    <p>{{ appName }}</p>
    <p>{{ userName }}</p>
    <button @click="handleChangeAppName">修改appName</button>

    <!-- <p> {{ appNameWithVersion }}</p> -->
    <p>{{ appVersion }}</p>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import DInput from '_c/DInput.vue'
import DShow from '_c/DShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    DInput,
    DShow
  },
  computed: {
    // ...mapState({
    //   userName: state => state.userName
    // })
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.todo ? state.todo.todoList : [],
      // stateValue: state => state.stateValue
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      }
    },
    ...mapGetters([
      'appNameWithVersion',
    ]),
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // }
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      // this.SET_APP_NAME('newAppName')
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // this.$store.commit('SET_APP_VERSION')

      // this.updateAppName()
      this.$store.dispatch('updateAppName', '343')
    },
    registerModule () {
      this.$store.registerModule('todo', {
        state: {
          todoList: ['学习Vue', '学习Laravel源码']
        }
      })
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>

<style>

</style>
