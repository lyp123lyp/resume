<template>
  <div class="app-search">
    <div class="icon_header">
      <i class="iconfont icon-search"></i>
      <input type="search" placeholder="搜索商品" v-model="value">
      <mt-button  size="small" type="danger" @click.stop="searchProducts($event)">搜索</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  mounted(){
    var keywords=this.$route.params.keywords;
    if(keywords)
    this.value=keywords;
    
  },
  methods: {
    searchProducts(event){
      var kw=this.value.trim();
      if(kw==''){
        return;
      }
      var k=encodeURIComponent(kw);
      this.$router.push('/products/'+k);
    }
  },

  components:{
    
  }
};
</script>
<style scoped>
.app-search{
    position: relative;
    width: 100%;
    line-height: 4rem;
    height: 4rem;
    display: flex;
    font-size: 14px;
     background: -moz-linear-gradient(left,#FA4DBE 0,#FBAA58 100%);
    background: -webkit-gradient(linear,left top,left right,color-stop(0,#FA4DBE),color-stop(100%,#FBAA58));
    background: -webkit-linear-gradient(left,#FA4DBE 0,#FBAA58 100%);
    background: -o-linear-gradient(left,#FA4DBE 0,#FBAA58 100%);
    background: -ms-linear-gradient(left,#FA4DBE 0,#FBAA58 100%);
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
}
.icon_header{
    position: relative;
    width: 100%;
    padding: .8rem 1.5rem;
   
}
.icon_header .iconfont{
    position: absolute;
    font-size:25px;
    width: 29px;
    height: 29px;
    top: .16rem;
    left: 2.1rem;
    color: #ef4f4f;
}
.icon_header input{
    text-indent: 3rem;
    display: block;
    border: 0;
    border-radius: 20px;
    flex: 1;
    width:100%;
    height: 100%;
    overflow:hidden;
    outline:0;
    
}
.mint-button--small {
  position: absolute;
  width: 18%;
  height: 2.44rem;
  color: #fff;
  z-index: 2;
  right: 1.3rem;
  top: .78rem;
  line-height:2.5rem;
  border-radius: 20px;
}
.mint-search {
  height: auto;
}
</style>