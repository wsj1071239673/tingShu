<template>
  <dir class="pager">
    <ul v-if="pages" class="row">
      <li @click="setCurrentPage(currentPage - 1)" v-if="currentPage>1">{{currentPage-1}}上一页</li>
      <template v-for="page in pages">
        <li @click="setCurrentPage(page)" class="pull-left" v-if="page >= start && page <= end" :key="page" :class="{active: currentPage === page}">{{page}}</li>
      </template>
      <li v-if="currentPage < pages"  @click="setCurrentPage(currentPage + 1)">下一页{{currentPage+1}}</li>
    </ul>
  </dir>
</template>

<script>
/* 
  如果当前页小于4 那么开始就取1
  如果当前页大于4 那么就取当前页-3

  1234567

  567891011

  6789101112

  5 
  1 2 3 4 5 

  9
  4 5 6 7 8 9 10


  1 如果总页码小于7
  那么开始页永远是 1 

  结束页就是总页码
  
  如果总页码大于7 
  当前页 < 4
  开始页是1
  当前页>4
  开始页是当前页-3

  当前页 < 总页码 - 3
  结束页 当前页 + 3
  当前页 > 总页码 - 3 
  结束页 总页码
*/

import bus from '@/bus'
export default {
  props: {
    pages: Number,
    currentPage: Number
  },
  data () {
    return {
      interval: 4,
    }
  },
  computed: {
    start () {
      let num = Math.max(1, this.currentPage - this.interval)
      if ((this.currentPage + this.interval) > this.pages) {
        num = (this.pages - 2 * this.interval) < 1 ? 1 : (this.pages - 2 * this.interval);
      }
      return num
    },
    end () {
      let num = Math.min(this.currentPage + this.interval, this.pages)

      if (this.currentPage < (this.interval + 1)) {
        num = (2 * this.interval + 1) > this.pages ? this.pages : (2 * this.interval + 1);
      }
      return num
    }
  },
  methods: {
    setCurrentPage (page) {      
      // console.log(page)
      bus.$emit('currentPageChange', page)
    }
  }, 
 
}
</script>

<style>
  .pager {
    width: 620px;
  }
  .active {
    color: red;
  }
</style>
