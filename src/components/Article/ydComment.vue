<template>
  <div class="comment">
    <div class="comment-heading">
      <textarea v-model="content"></textarea>
      <button @click="sendComment">发布</button>
    </div>
    <div class="comment-body">
      <span>最新评论({{comments.length}})</span>
      <span v-if="!comments.length">暂无评论</span>
      <ul v-else>
        <li class="comment-item"
          v-for="(comment, index) in comments" :key="comment.id">
          <span v-if="comment.isDel" @click="del(comment.id, index)">x</span>
          <img :src="comment.img_url" alt="">
          <div class="item-body">
            <div>
              <span class="name">{{comment.nikiname}}</span>
              <span class="time">{{comment.reply_time}}</span>
            </div>
            <p>{{comment.content}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {userComment, delComment} from '@/service/getData'
export default {
  data () {
    return {
      content: ''
    }
  },
  props: {
    comments: Array
  },
  methods: {
    sendComment () {
      const article_id = this.$route.params.id
      userComment({
        article_id, 
        content: this.content
      }).then(res => {
        console.log(res)
        if (res.data.res_code === 200) {
          // res.data.res就是最新的一条评论
          this.$emit('send:comment', res.data.res)
        }
      })
    },
    del (id, index) {
      delComment(id).then(res => {
        if (res.data.res_code === 200) {
          this.$emit('del:comment', index)
        }
      })
    }
  }
}
</script>

<style>

</style>
