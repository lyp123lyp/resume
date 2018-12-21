<template>
  <div class="dis-box">
    <div class="ect-select">
      <input type="checkbox" name="proId[]" value="3104" class="checkbox_input" checked="checked">
      <label class="rec-active active checkbox_img" goods-id="3104" rec-id="111">
        <i class="j-select-btn"></i>
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
            <span class="t-first">¥{{item.price}}</span>
            <div class="div-num dis-box">
              <Addbutton></Addbutton>
            </div>
            <i class="iconfont icon-xiao10">X</i>
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
  props: ["item"],
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
  padding: 1.3rem;
  padding-left: 0;
  width: 5%;
  padding-top: 1.8rem;
}
.ect-select label {
  height: 2.2rem;
  line-height: 2.2rem;
  font-size: 1.6rem;
}
.ect-select label.active i {
  border: 1px solid #ec5151;
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
