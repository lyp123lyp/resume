<template>
  <div class="searchShop">
    <div class="top">
      <mt-header fixed title="搜索商品"></mt-header>
    </div>
   <SearchBox></SearchBox>
    <div class="searchTitle">
      <SearchTitle></SearchTitle>
    </div>
  </div>
</template>
<script>
import SearchBox from "./common/searchBox.vue"
import SearchTitle from "./common/searchTitle.vue"
export default {
  data() {
    return {
     
    };
  },
  methods:{
    
  },
  props:[],
  components:{
    SearchBox,
    SearchTitle
  }
};
</script>
<style scoped>
.search-cat .search-cat-tit .up-menu {
    display: block;
    height: 20px;
    line-height: 20px;
    font-size: .9em;
    color: #999;
}

</style>
