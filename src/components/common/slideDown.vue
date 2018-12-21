<template>
  <div class="ullit bgWhite">
    <ul class="row-s col-mar flex">
      <li class="col-12-3 text-center" v-for=" (key,index) in TabList" :key="index">
        <router-link :to="'/products/'+key.name">
          <i class="iconfont">
            <img
              :src="'/static/picture/'+key.img"
            >
          </i>
          <span>{{key.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["TabList"]
};
</script>
<style scoped>
 .ullit{
     
       transform:translateY(-100%);
        transition: all 0.4s ease 0s;
}
.bgColor .ullit{
    transform:translateY(0);
    
   
}
 .ullit ul{
     flex-flow: wrap;
     justify-content:start;  
 }
 .ullit li{
  margin-bottom: 2rem;
 }
 .col-12-3 img {
    width: 61px;
    height: 61px;
}
.col-12-3 a{
    color:#777;
}
</style>