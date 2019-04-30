<template>
  <div class="page-article">
    <router-link :to="'/article/' + (id - 1)">上一篇</router-link>
    <router-link :to="'/article/' + (id + 1)">下一篇</router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  }
}
</script>

<style>
.page-article {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 20px 0;
}
</style>
