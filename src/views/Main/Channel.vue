<template>
  <div class="row container">
    <!-- 左侧列表 -->
    <yd-list 
      :articles="channelList.articles"
      :count="channelList.count"
      :page="channelList.page"></yd-list>
    <!-- 右侧列表 -->
    <yd-list-top10 
      :articles="channelListTop10.articles"
      :type="channelListTop10.type"></yd-list-top10>
  </div>
</template>

<script>
import bus from '@/bus'
// 引入两个组件
import ydList from '@/components/Channel/ydList'
import ydListTop10 from '@/components/Channel/ydListTop10'

// import {getList} from '@/service/getData'
import {getListData, getList} from '@/service/getData'

export default {
  components: {
    ydList, ydListTop10
  },
  data () {
    return {
      channelList: {},
      channelListTop10: {}
    }
  },

  methods: {
    changeCurrentPage (page) {
      
      console.log(page, id)
      // 根据page请求数据
      getList(id, page).then(res => {
        this.channelList = res.data.res
      })
    
    }
  },
  created () {
    const id = this.$route.params.id
    /* getList(id).then(res => {
      if (res.data.res_code === 200) {
        this.channelList = res.data.res
      }
    }) */

    getListData(id).then(([getList, getListTop10]) => {
      this.channelList = getList.data.res
      this.channelListTop10 = getListTop10.data.res
    })

    // 记住把之前绑定的监听清空，防止同时响应多个emit
    /* 
      bus.$off('自定义事件名',this.changeCurrentPag)
    
    */
    bus.$off('currentPageChange')
    bus.$on('currentPageChange', page => {
      // console.log(id)
      getList(id,page).then(res => {
        if(res.data.res_code){
          this.channelList=res.data.res
        }
      })
    })
    // bus.$on('currentPageChange', this.xxx)
    
  },
  deactivated () {
    
  }
  
}
</script>

<style>

</style>
