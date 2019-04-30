<template>
  <div class="article">
    <div class="article-item">
      <h1 class="article-title">{{article.title}}</h1>
      <div class="article-meta">
        <div>
          <span>{{article.author}}</span>
          <span>{{article.podcast}}</span>
          <span>{{article.duration}}</span>
        </div>
        <span>播放<i>{{article.play_time}}</i>次</span>
      </div>
      <img class="article-img" :src="article.img_url" alt="">
      <audio controls :src="article.mp3_url"></audio>
    </div>

    <div class="article-item row">
      <div :class="['item', {'active': visible}]">
        <div class="article-content" v-html="formatArticleContent"></div>
        <div class="item-intro-hide"></div>
      </div>
      
      <a href="javascript:;" 
        class="show pull-right"
        @click="showAll">{{visibleMsg}}</a>
    </div>

    <div class="article-item labels">
      标签: <span 
        v-for="(label, index) in formatLabels"
        :key="index">{{label}}</span>
    </div>

    <yd-next-prev :id="article.id"></yd-next-prev>
  </div>
</template>

<script>
import ydNextPrev from './ydNextPrev'
export default {
  components: {
    ydNextPrev
  },
  data () {
    return {
      visible: false,
      visibleMsg: '展开全文'
    }
  },
  methods: {
    showAll () {
      this.visible = !this.visible
      this.visibleMsg = this.visible ? '收起' : '展开全文'
    }
  },
  props: {
    article: Object
  },
  computed: {
    formatArticleContent () {
      if (this.article.content) {
        const reg = /\s/g
        return this.article.content.replace(reg, '<br>')
      }
      return true
    },
    formatLabels () {
      if (this.article.labels) {
        return this.article.labels.split(',')
      }
      return true
    }
  },
  filters: {
    /* replaceBr (value) {
      if (value) {
        const reg = /\s/g
        return value.replace(reg, '<br>')
      }
    } */
  }
}
</script>

<style>
.article {
  width: 620px;
}
.article-item {
  padding: 20px;
  background: #fff;
  margin-top: 30px;
  position: relative;
}

.article-title {
  font-size: 24px;
  margin-bottom: 15px;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #707070;
}

.article-meta div span{
  display: inline-block;
  margin-right: 20px;
}

.article-meta i {
  font-size: 18px;
}

.article-img {
  display: block;
  width: 100%;
  margin: 25px 0 30px;
}

audio {
  width: 100%;
}

.article-content {
  color: #707070;
  line-height: 22px;
  letter-spacing: 1px;
  
}

.item {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.item.active {
  height: auto;
}

.item.active .item-intro-hide {
  display: none;
}

.item-intro-hide {
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255,255,255,0)), color-stop(1, #FFF));
}

.show {
  padding-top: 20px;
} 

.labels {
  color: #707070;
}
.article-item span {
  margin-right: 10px;
}
</style>
