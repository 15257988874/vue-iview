<template>
<div>
  <count-to ref="count" :end-val="endVal" @on-animation-end="animationEnd" prefix="总金额:" suffix="元"></count-to>
  <br>
  <button @click="getEndVal">获取结束值</button>
  <button @click="up">改变结束值</button>
</div>
</template>

<script>
import CountTo from '@/components/countTo'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 100.5988
    }
  },
  methods: {
    animationEnd(response) {
      console.log(response)
    },
    getEndVal() {
      console.log(this.$refs.count.getEndVal())
    },
    up() {
      this.endVal += (Math.random() * 100)
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类

</style>
