<template>
  <div class="classify">
     <mt-header fixed title="商品分类"></mt-header>
    <div class="searchBox flex">
      <GoBack></GoBack>
      <Search></Search>
    </div>
    <div class="classifyDetail flex">
      <AsideScroll @getFidClassify="getDetailList" :classifyList="classifyList"></AsideScroll>
      <div class="content">
        <ul class="detail main-cat2">
          <li class="cat-item " v-for="(key,index) in detailList" :key="index">
            <router-link :to="'/products/'+encodeURIComponent(key.name)">
              <img :src="'/static/picture/'+key.img" alt class="lazy">
              <span>{{key.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import GoBack from "./common/goBack.vue";
import Search from "./common/search.vue";
import AsideScroll from './common/asideScroll';
export default {
  data() {
    return {
      classifyList: [],
      detailList:[]
    };
  },
  props: [],
  created(){
    this.classifyList=this.$localStorage.get("classifyList")
  },
  mounted() {
    this.getDetailList(1);
  },
  methods:{
    getDetailList(fid){
      this.$axios.get(this.$host+"/products/classify",{params:{fid}}).then(res=>{
      
        this.detailList=res.data;
      });
    }
  },
  components: {
    GoBack,
    Search,
    AsideScroll
  }
};
</script>
<style scoped>
.searchBox {
  position: relative;
  z-index: 100;
}
.icon-xiangzuo {
  position: absolute;
  color: #fff;
  left: 1rem;
  top: 50%;
  z-index: 2;
  height: 24px;
  margin-top: -12px;
  font-size: 20px;
}
.searchBox .app-search {
  padding-left: 2rem;
}
.classifyDetail {
  position: relative;
  background-color: #FFF;
}
.content{
  width: 80%;
  margin: 0 0 0 auto;
   padding-top: 2rem;
}
.main-cat2 li {
    width: 33%;
    float: left;
    text-align: center;
    opacity: 1;
    transition: all .5s cubic-bezier(.4,.68,.15,1) .2s;
    -webkit-transition: all .5s cubic-bezier(.4,.68,.15,1) .2s;
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
}
.main-cat2 li a {
    display: block;
    font-size: 12px;
    color: #333;
    line-height: 25px;
    overflow: hidden;
    padding-bottom: 20px;
}
.main-cat2 li img {
    display: block;
    margin: auto;
    width: 60%;
    min-height: 40px;
}
</style>
