<template>
  <div class="wrapper pull-left">
    <div class="channels">
      <div 
        class="channel"
        v-for="article in articles"
        :key="article.id">
        <div class="channel-img">
          <img :src="article.img_url" alt="">
        </div>
        <div class="channel-body">
          <h3 class="channel-title"><router-link :to="'/article/' + article.id">{{article.title}}</router-link></h3>
          <div class="channel-meta">
            <span>{{article.author}}</span>
            <span>{{article.podcast}}</span>
            <span>{{article.duration}}</span>
            <span>{{article.play_time}}次</span>
          </div>
          <div class="channel-desc">
            {{article.content | sliceContent}}
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <yd-pager :pages="pages" :currentPage="page"></yd-pager>
  </div>
</template>

<script>
import ydPager from './ydPager'
export default {  
  components: {
    ydPager
  },
  props: {
    articles: Array,
    count: Number,
    page: Number
  },
  computed: {
    pages () {
      return Math.ceil(this.count / 10)
    }
  },
  filters: {
    sliceContent (value) {      
      return value.slice(0, 75) + '……'
    }
  }
}
</script>

<style>
  .channels {
    padding-top: 30px;
  }
  .channel {
    width: 620px;
    display: flex;
    background: #fff;
    color: #707070;
    margin-bottom: 30px;
  }

  .channel-img {
    flex-shrink: 0;
    width: 210px;
    height: 210px;
    overflow: hidden;
  }

  .channel-img img {
    height: 100%;
  }


  .channel-body {
    padding: 30px;
  }

  .channel-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .channel-meta {
    font-size: 12px;
    margin-bottom: 25px;
  }

  .channel-meta span {
    margin-right: 20px;
  }

  .channel-desc {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 1;
    
  }
</style>
