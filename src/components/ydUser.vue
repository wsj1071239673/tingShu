<template>
  <div class="pull-right">
    <router-link to="/login" v-if="!user">登录</router-link>
    <div v-else>
      <a href="javascript:;" @click.stop="show = !show">{{user.nikiname}}</a>
      <ul v-show="show">
        <li>
          <router-link :to="'/user/' + user.id">个人主页</router-link>
        </li>
        <li>
          <router-link to="/setting">设置</router-link>
        </li>
        <li>
          <a href="javascript:;" @click="logout">退出</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    user: [Object, String]
  }, 
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$emit('logout')//自定义事件
    }
  },
  created () {
    const _this = this
    document.addEventListener('click', function () {
      if (_this.show) {//注意事件冒泡
        _this.show = false
      }
    })
  }
}
</script>

<style>

</style>
