<template>
  <div class="row container">
    <!-- 左侧 文章详情、评论 -->
    <div class="wrapper pull-left">
      <!-- 文章详情 -->
      <yd-article v-if="article" :article="article"></yd-article>
      <!-- <div v-else>未找到页面</div> -->
      <!-- 评论 -->
      <yd-comment 
        :comments="comments"
        @send:comment="getComment"
        @del:comment="delComment"></yd-comment>
    </div>
    <!-- 右侧 其他相关节目轮播、其他频道节目 -->
    <div class="aside pull-right">
      <!-- 轮播 -->
      <yd-banner :articles="bannerArticles"></yd-banner>
      <!-- 其他节目 -->
    </div>
  </div>
</template>

<script>
// 引入获取文章详情的接口
import {getArticle, getBanner, getComments} from '@/service/getData'
import ydBanner from '@/components/Article/ydBanner'
import ydArticle from '@/components/Article/ydArticle'
import ydComment from '@/components/Article/ydComment'
export default {
  components: {
    ydArticle,
    ydBanner,
    ydComment
  },
  data () {
    return {
      article: {},
      bannerArticles: [],
      comments: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (!this.article.title) {
      next('/404')
    } else {
      next()
    }
  },
  methods: {
    getComment (comment) {
      this.comments.push(comment)
    },
    delComment (index) {
      this.comments.splice(index, 1)
    }
  },
  activated () {
    // document.querySelector('title').innerText = this.article.title//获取标题的方法一
  },
  created () {
    const id = this.$route.params.id
    getArticle(id).then(res => {
      if (res.data.res_code === 200) {
        this.article = res.data.res
        // document.querySelector('title').innerText = this.article.title
      } else {
        // 需要用代码跳转到404
        this.$router.replace('/404')
      }
    })

    getBanner().then(res => {
      if (res.data.res_code === 200) {
        this.bannerArticles = res.data.res
      }
    })

    getComments(id).then(res => {
      console.log(res)
      if (res.data.res_code === 200) {
        this.comments = res.data.res
      }
    })
    
  }
}
</script>

<style>

</style>