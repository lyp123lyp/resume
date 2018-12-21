<template>
  <div class="app-swipe">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeList" :key="item.pid">
        <router-link :to="'/detail/'+item.pid">
            <img :src="item.src">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:['swipeList'],
  methods: {}
};
</script>
<style scoped>
.swipeBox{
  margin-top:4rem;
}
.app-swipe{
    padding-top: 1px;
    height: 156px;
    overflow: hidden;
}
.mint-swipe-item a{
    display: block;
}
.mint-swipe-item a img{
  display: block;
  width: 100%;
  height: 156px;
}
</style>