<template>
<div>
  <!--  .native 父组件上监听子组件的原生事件 -->
  <a-input v-model="value" @focus="handleFocus" @click="handleInput"/>
  <p>value: {{ value }}</p>
  <h1>vue store</h1>
  <p>root study: {{ study }}</p>
  <p><button @click="updateStudy">更新study</button></p>
  <p>module userName: {{ userName }}</p>
  <p>studyWithVersions: {{ studyWithVersions }}</p>
  <p>firstLetter: {{ firstLetter }}</p>
</div>
</template>

<script>
import AInput from '_c/AInput.vue'
import { mapState, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapGetters } = createNamespacedHelpers('user')
export default {
  components: { AInput },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    // ...mapMutations(['UPDATE_STUDY']),
    handleFocus (e) {
      console.log(e.target.value)
    },
    handleInput (e) {
      console.log(e)
      e.stopPropagation()
      return false
    },
    updateStudy () {
      this.$store.commit('UPDATE_STUDY', 'study2')
    }
  },
  computed: {
    ...mapState(['study']),
    ...mapState('user', {
      userName: state => state.userName
    }),
    ...mapGetters(['studyWithVersions']),
    ...mapGetters('user', [
      'firstLetter'
    ])

  },
  mounted () {
    // console.log(this.$store)
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类

</style>
