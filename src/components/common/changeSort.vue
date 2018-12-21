<template>
  <div class="order-nav">
    <ul  @click="changeSort($event)">
      <li :class="cur==0?'cur':''">
        <span data-set="0">人气</span>
      </li>
      <li :class="cur==1?'cur':''">
        <span data-set="1">最新</span>
      </li>
       <li :class="cur==2?'cur':''">
        <span data-set="2">销量</span>
      </li>
       <li :class="cur==3?'cur':''">
        <span data-set="3">
          价格
          <i class="price-ico" data-set="3" :class="{down,up}"></i>
          <!--ico-up 升序   ico-down降序-->
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur:0,
      down:false,
      up:false
    };
  },
  props: [],
  methods:{
    changeSort(e){
      var obj={};
      var dataset=e.target.dataset.set;
      this.cur=dataset;
      obj.cur=dataset;
      if(dataset==3){
        if(this.down==false){
          this.up=false;
          this.down=true;
          obj.sort=2;
        }else{
          this.up=true;
          this.down=false;
          obj.sort=1;
        }
      }else{
        this.up=this.down=false;
        obj.sort=0;
      }
     this.$emit("ling",obj);
    }
  }
};
</script>
<style scoped>
.order-nav {
  height: 5rem;
  background: #fff;
  position: relative;
  z-index: 54;
  width: 100%;
  transition: all .4s ;
}
.order-nav ul li.cur {
  border-bottom: 1px solid #fe4a65;
  color: #fe4a65;
}
.order-nav ul li {
  box-sizing: border-box;
  float: left;
  width: 25%;
  text-align: center;
  line-height: 5rem;
  height:5rem;
}
.order-nav ul li  span{
  font-size: 15px;
  color: #333;
  display: block;
}
.order-nav ul li.cur span {
  color: #fe4a65;
}
.price-ico {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url(../../assets/images/pic_resources.png);
  background-position: -277px -65px;
  background-repeat: no-repeat;
  background-size: 300px;
  top: 2px;
}
.down {
  background-position: -277px -96px;
}
.up {
  background-position: -277px -80px;
}
</style>
