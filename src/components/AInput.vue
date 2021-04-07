<template>
  <label>
     <!-- <input type="text" @input="handleInput" @value="value"> -->
     <input type="text" v-on="inputListeners" @value="value">
  </label>
</template>

<script>

export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      defaule: ''
    }
  },
  computed: {
    inputListeners () {
      return Object.assign({}, this.$listeners, {
        input: (e) => this.$emit('input', e.target.value)
      })
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  mounted () {
    console.log(this.$listeners)
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
