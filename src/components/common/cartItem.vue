<template>
  <div class="dis-box">
    <div class="ect-select">
      <label class="checkbox" :goods-id="item.pid" @click="checkThis()" :class="item.ischeck==1?'active':''">
      </label>
    </div>
      <!-- 商品信息 -->
      <div class="box-flex">
        <div class="product-div">
          <div class="p-d-img fl">
            <router-link :to="'/detail/'+item.pid">
              <img :src="host+'/static/picture/'+ item.img" class="product-list-img">
            </router-link>
          </div>
          <div class="product-text">
            <h4 class="onelist-hidden">
              <router-link :to="'/detail/'+item.pid">{{item.title}}</router-link>
            </h4>
            <h4 class="onelist-hidden">
              类型:
              <span v-if="item.guiGe!=null">{{item.guiGe}}.</span>
              <span v-if="item.color!=null">{{item.color}}.</span>
              <span v-if="item.chiMa!=null">{{item.chiMa}}</span>
            </h4>
            <span class="t-first">¥{{item.price.toFixed(2)}}</span>
            <div class="div-num dis-box">
              <Addbutton :val="item.value" @ling="changeValue"></Addbutton>
            </div>
            <i class="iconfont icon-xiao10" @click="removeItem">X</i>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Addbutton from "./addbutton";
export default {
  data() {
    return {
      host: this.$host
    };
  },
  methods:{
    changeValue(msg){
      var i=this.index;
      this.$emit("lingCart",{val:msg,index:i});
    },
    checkThis(msg){
      let index=this.index;
      let ischeck=!this.item.ischeck;
      this.$emit("lingCart",{index,ischeck})
    },
    removeItem(){
      let index=this.index;
      this.$emit("lingCart",{remove:index})
    }
  },
  props: ["item","index"],
  components: {
    Addbutton
  }
};
</script>
<style scoped>
.dis-box {
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
}
.ect-select {
  padding: 3rem 0;
  width:12%;
  padding-top: 1.8rem;
}
 label {
  height: 2rem;
  line-height: 2.2rem;
  font-size: 1.6rem;
  display:block;
  margin-top: 2.5rem;
  width: 2rem;
  border: 2px solid #ec5151;
  border-radius: 50%;
  box-sizing:border-box;
}
 label.active{
  color: #fff;
  text-align: center;
  background: #ec5151;
  background-size: 70%;
}
.product-div:first-of-type {
  padding-top: 1.3rem;
  overflow: hidden;
}
.p-d-img {
  position: relative;
  overflow: hidden;
  width: 8rem;
  height: 8rem;
}
.product-div img {
  width: 100%;
  height: auto;
  display: block;
  box-sizing: border-box;
  border: 1px solid #f3ebeb;
}
.product-text {
  position: relative;
  margin-left: 9rem;
  height: auto;
  padding-top: 0;
  padding: 0.2rem 0;
  overflow:hidden;
}
.product-text h4{
    line-height: 1.8rem;
    font-weight: 400;
}
.product-text h4 a{
  color: #777;
}
.product-text .t-first {
  font-size: 16px;
  display: block;
  margin: 0.2rem 0 1rem 0;
}
.t-first {
  color: #ec5151;
}
.div-num {
  position: relative;
  z-index: 4;
  width: 10rem;
  border: 1px solid #ededed;
  border-radius: 4px;
}
i.icon-xiao10 {
  position: absolute;
  font-size: 16px;
  color: #888;
  right: 1rem;
  bottom: .6rem;
  color: #ec5151;
}
.box-flex{
  flex:1;
}
</style>
