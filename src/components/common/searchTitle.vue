<template>
  <div class="search-cat wap-src-cat">
    <div class="search-cat-tit">
      <span class="up-menu">热门搜索</span>
    </div>
    <div class="src-content">
      <ul class="main-src">
        <li class="src-item mm-nolistview src-item-ck" v-for=" (key,index) in hotSearchList" :key="index">
          <router-link  :to="'/products/'+encodeURIComponent(key)" v-cloak>{{key}}</router-link>
        </li>
      </ul>
      <div style="clear: both"></div>
    </div>
    <div class="search-cat-tit">
      <span class="up-menu">商品分类</span>
    </div>
    <div class="menu-content">
      <ul class="main-cat">
        <li class="cat-item mm-nolistview" v-for="(key,index) in classifyList" :key="index">
          <router-link  :to="'/products/'+encodeURIComponent(key.name)">{{key.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        hotSearchList:["电热毯","加湿器","暖手宝","袜子","雪地靴"],
        classifyList:[]
    };
  },
  mounted() {
   this.classifyList=this.$localStorage.get("classifyList");
  },
  methods:{
    
  }
};
</script>
<style scoped>
.search-cat {
  text-align: left;
    position: fixed;
    top: 0;
    bottom: 0;
    padding-top: 90px;
    width: 100%;
    height: 100%;
    padding-bottom: 11px;
    background-color: #fff;
}
.search-cat .search-cat-tit {
    position: relative;
    width: 150px;
    height: 10px;
    margin: 30px 3% 20px;
}
.search-cat .search-cat-tit .up-menu {
    display: block;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #999;
}
.src-content,.menu-content {
    margin: 20px 0 30px;
    width: 97%;
}
.main-cat{
  overflow: hidden;
}
.main-src .src-item ,
.search-cat .menu-content .main-cat li{
    float: left;
    border-radius: 22px;
    padding: 0 10px;
    height: 23px;
    line-height: 20px;
    background-color: #f6f6f6;
    margin: 10px;
    position: relative;
}
.main-src .src-item a,
.search-cat .menu-content .main-cat li a {
    font-size: 13px;
    color: #333;
}
 
</style>