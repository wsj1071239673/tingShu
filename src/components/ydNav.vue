<template>
  <div class="nav">
    <nav>
      <router-link 
        exact
        active-class="active"
        v-for="item in types"
        :key="item.id"
        :to="'/channel/' + item.id">{{item.type}}</router-link>
        <yd-user @logout="user = ''" :user="user"></yd-user>
    </nav>
    
  </div>
</template>

<script>
// 引入获取导航类型的方法
import {getTypes} from '@/service/getData'
import bus from '@/bus.js'
// 在导航中请求对应的接口获取到所有的导航信息
// import axios from '@/axios'
import ydUser from './ydUser'
export default {
  components: {
    ydUser
  },
  data () {
    return {
      types: [],
      user: localStorage.getItem('user') ? JSON.parse( localStorage.getItem('user')) : '',//不可少,页面刷新用
      // 注意:不能写成(JSON.parse(localStorage.user||'{}'))因为 {}也为真值
    }
  },
  methods: {
    /* getNavigatior () {
      axios.get('/types').then(res => {
        console.log(res.data)
        this.types = res.data.res
      })
    } */
  },
  created () {
    // this.getNavigatior()
    getTypes().then(res => {
      if (res.data.res_code === 200) {
        this.types = res.data.res
      }
    })

    bus.$on('send:user', (user) => {
      this.user = user//让登陆换成用户名,数据改变
    })

    bus.$on('logout', () => {//针对axios中的logout
      this.user = {}
    })
  }
}
</script>

<style>
  .nav {
    background: #fff;

  }

  nav {
    width: 1010px;
    margin: 0 auto;
    height: 100px;
    line-height: 100px;
  }

  nav a {
    float: left;
    margin-right: 20px;
    padding: 0 20px;
  }
  
  nav .active {
    color: #f30;
  }
</style>
