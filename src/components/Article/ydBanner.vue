<template>
  <div class="banner">
    <div class="banner-heading row">
      <h1 class="pull-left banner-title">其他相关节目</h1>
      <div class="control pull-right">
        <span @click="prev" :class="{disabled: index === 0}"><i class="iconfont icon-xiazai6"></i></span>
        <span @click="next" :class="{disabled: index === 4}"><i class="iconfont icon-z043"></i></span>
      </div>
    </div>
    <div class="articles">
      <ul class="row"
        :style="{transform: 'translate3d(' + (-index * 330) + 'px,0,0)'}">
        <router-link 
          tag="li"
          :to="'/article/' + article.id"
          class="pull-left"
          v-for="article in articles"
          :key="article.id">
          <img height="84" width="100%" :src="article.img_url" alt="">
          <span class="title">{{article.title}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
  data () {
    return {
      /* articles: [], */
      index: 0
    }
  },
  props: {
    articles: Array
  },
  methods: {
    prev () {
      if (this.index > 0) {
        this.index--
      }
    }, 
    next () {
      if (this.index < 4) {
        this.index++
      }
    }
  },
  created () {
   /*  axios.get('/articles/rand').then(res => {
      this.articles = res.data.res
    }) */
  }

}
</script>

<style>
  .banner-heading {
    /* display: flex; */
  }

  .banner-title {
    font-weight: bold;
    border-left: 3px solid #f30;
    padding-left: 10px;
  }
  .articles {
    overflow: hidden;
    width: 300px;
  }
  .articles ul {
    width: 1650px;
    /* height: 278px; */
    transition: all .3s;
  }
  .articles li {
    width: 135px;
    margin-right: 30px;
    padding-top: 30px;
  }

  .banner .title {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 10px;
    font-size: 12px;
    color: #707070;
  }
  .control i{
    font-size: 12px;
  }
  .control .disabled {
    color: #707070;
    cursor: not-allowed;
  }
</style>
