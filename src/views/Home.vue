<template>
  <div class="home">
    <p>{{ food }}</p>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent页</button>
    <button @click="handleClick('replace')">替换</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        const name = 'duan'
        this.$router.push({path: `/argu/${name}`})
      }
      else if (type === 'replace') this.$router.replace({name: 'parent'})
    }
  }
}
</script>
