<template>
 <i class="iconfont icon-xiangzuo" @click="goBack"></i>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  props:[],
  methods:{
      goBack(){
      if(window.history.length<=1){
        this.$router.push("/");
      }else{
       this.$router.go(-1);
      }
    }
  }
};
</script>
<style scoped>
.icon-xiangzuo{
  position: absolute;
  color: #fff;
  left:1rem;
  top: 50%;
  z-index: 2;
  height: 24px;
  margin-top: -12px;
  font-size: 20px;
}

</style>
