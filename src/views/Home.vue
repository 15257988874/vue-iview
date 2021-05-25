<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import { Login } from '@/api/user'
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    Login({userName: 'admin', password: 'E10ADC3949BA59ABBE56E057F20F883E', PC: 0, code: '6996'}).then( res => {
      console.log(res)
    })
  }
}
</script>
