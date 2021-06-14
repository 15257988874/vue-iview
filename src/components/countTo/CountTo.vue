<template>
  <span class="count-to-number" ref="count-to-number" :id="elmId" ></span>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
  components: {},
  props: {
    /**
     * @description: 起始值
     */
    startVal: {
      type:Number,
      default: 0
    },
    /**
     * @description: 结束值
     */
    endVal: {
      type:Number,
      required: true
    },
    duration: {
      type: Number,
      default: 1
    },
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
    /**
     * @description: 保留小数位
     */
    decimalPlaces: {
      type: Number,
      default: 2
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getEndVal() {
      return this.$refs['count-to-number'].innerText
    },
  },
  computed: {
    elmId() {
      return 'count-to-' + this._uid
    }
  },
  watch: {
    endVal(newVal) {
      this.countUp.update(newVal)
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.countUp = new CountUp(this.elmId, this.endVal, {
        startVal: this.startVal,
        duration: this.duration,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal,
        decimalPlaces: this.decimalPlaces,
        prefix: this.prefix,
        suffix: this.suffix
      } )
      this.countUp.start(()=> {
        this.$emit('on-animation-end', Number(this.getEndVal().replace(this.suffix,'').replace(this.prefix,'')))
      })
    })
  }
}
</script>
<style lang="less" scoped>
  @import url('./index');
</style>
