<template>
  <div>
    <yd-nav></yd-nav>
    <keep-alive>
      <router-view :key="$route.path"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// 引入导航并注册
import ydNav from '@/components/ydNav.vue'

export default {
  components: {
    ydNav
  }
}
</script>

<style>

</style>
