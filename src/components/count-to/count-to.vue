<template>
  <div>
    <slot name="left"></slot><span ref="number" :class="countClass" :id="eleId"></span><slot name="right"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'
import { setTimeout } from 'timers';
export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `count_up_$(this._uid)`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  props: {
    /*
      起始值
    */
    startVal: {
      type: Number,
      default: 0
    },
    /*
      最终值
    */
    endVal: {
      type: Number,
      required: true
    },
    /*
     表示小数点后保留几位小数
    */
    decimals: {
      type: Number,
      default: 0
    },
    // 动画延迟
    delay: {
      type: Number,
      default: 0
    },
    // 渐变时长
    duration: {
      type: Number,
      default: 1
    },
    // 是否使用变速效果
    useEasing: {
      type: Boolean,
      default: false
    },
    //
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCount () {
      return this.$refs.number.innerHTML
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$emit('on-animation-end', Number(this.getCount()))
      }, this.duration * 1000)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  }
}
</script>
<style lang="less">
.count-to-number {
    color: #dddddd
}
</style>

