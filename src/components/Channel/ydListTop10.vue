<template>
  <div class="aside pull-right">
    <div class="top10-heading">
      <h3>{{type}}频道top10</h3>  
    </div> 
    <ul class="top10">
      <li class="top10-item" v-for="article in articles" :key="article.id">
        <router-link :to="'/article/' + article.id">{{article.title}}</router-link>
        <div class="top10-info">
          <span>文：{{article.author}}</span>
          <span>主播：{{article.podcast}}</span>
        </div>
      </li>  
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
    type: String
  }
}
</script>

<style>
.aside {
  margin-top: 30px;
  background: #fff;
  padding: 30px;
}
.top10-list {
  width: 360px;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
}

.top10-heading {
  font-weight: bold;
  line-height: 1;
  font-size: 14px;
  border-left: 3px solid #ee5044;
  padding-left: 8px;
}

.top10 {
  margin-top: 30px;
  list-style: decimal;
  margin-left: 14px;
}

.top10-item {
  border-bottom: solid 1px #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: #707070;
}

.top10-item .top10-info {
  margin-top: 10px;
}

.top10-info span {
  margin-right: 10px;
  color: #999;
}

</style>
