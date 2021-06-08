<template>
  <div>
    <button @click="getUserInfo" :style="{background: bgColor}">请求数据</button>
    <button @click="getUserList">获取用户列表</button>
    <button @click="getProductList">获取商品列表</button>
    <p>
      <img :src="image" alt="">
      <img :src="dataimage" alt="">
    </p>
  </div>
</template>

<script>
import { getUserInfo, getUserList } from '@/api/user'
import { getProductList } from '@/api/product'
export default {
  components: {},
  data() {
    return {
      image: '',
      dataimage: '',
      bgColor: ''
    }
  },
  methods: {
    getUserInfo() {
      getUserInfo({id: 11}).then(res => {
        console.dir(res)
        this.image = res.data.image
        this.dataimage = res.data.dataimage
        this.bgColor = res.data.color
      })
    },
    getUserList() {
      getUserList().then(res => {
        console.log(res)
      })
    },
    getProductList() {
      getProductList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类

</style>
