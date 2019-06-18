<template>
  <div>
    <d-input @input="handleInput"/>
    <d-show :content="inputValue"/>
  </div>
</template>

<script>
import DInput from '_c/DInput.vue'
import DShow from '_c/DShow.vue'

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
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style>

</style>
