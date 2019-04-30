<template>
  <div class="login">
    <div class="form-group">
      <input type="text" class="email" v-model="user.email" placeholder="请输入邮箱">
    </div>
    <div class="form-group">
      <input type="text" class="password" v-model="user.password" placeholder="请输入密码">
    </div>
    <div class="form-group">
      <button class="btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import {login as userLogin} from '@/service/getData'
import bus from '@/bus.js'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      userLogin(this.user).then(res => {
        console.log(res)
        if (res.data.res_code === 200) {
          this.$router.replace('/')
          // 将token存储在storage里
          localStorage.setItem('token', res.data.res.token)
          localStorage.setItem('user', JSON.stringify(res.data.res.user))
          // 登录完成后将ydNav中user修改
          bus.$emit('send:user', res.data.res.user)//若不写,登陆以后,页面依然显示登陆两个字

          this.user.email = ''
          this.user.password = ''

        }
      })
    }
  }
}
</script>


<style scoped>
/* scoped 使样式只对当前组件生效 */
  .login {
    width: 1010px;
    margin: 30px auto;
  }
  .form-group {
    margin-bottom: 20px;
  }

  .form-group input {
    border: none;
    width: 300px;
    background: #fff;
    padding: 15px;
    outline: none;
  }

  .form-group .btn {
    border: none;
    background: #f30;
    color: #fff;
    width: 80px;
    padding: 10px;
  }
  
</style>
