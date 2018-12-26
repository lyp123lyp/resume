<template>
  <div class="lqzq">
    <h3 class="home_h3 row-s">
      <div class="col-mar">
        <div class="col-12-4 text-left">
          <i></i>领券专区
        </div>
      </div>
    </h3>
    <div class="productList">
      <Shuaxin></Shuaxin>
    </div>
  </div>
</template>
<script>
import Shuaxin from "./shuaxin";
export default {
  data() {
    return {
      host:this.$host
    };
  },
 props:[],
 components:{
   Shuaxin
 }
};
</script>
<style scoped>


</style>