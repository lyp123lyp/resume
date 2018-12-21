<template>
  <div class="scrollable">
    <div class="goods-list" data-page="2">
      <div class="goods-item" v-for="(key,index) in productList" :key="index">
        <router-link
         :to="'/detail/'+key.pid"
          class="img"
        >
          <span class="coupon-wrapper theme-bg-color-1">券
            <i>￥</i>
            <b>{{key.quan}}</b>
          </span>
          <img
            class="lazy"
            :src="host+'/static/picture/'+key.img"
            
            alt
            style="background: rgb(245, 245, 245); display: inline;"
          >
        </router-link>
        <router-link
          :to="'/detail/'+key.pid"
          class="title"
        >
          <div class="text">{{key.title}}</div>
        </router-link>
        <div class="price-wrapper">
          <span class="price">
            ￥
            <span>{{key.oldPrice-key.quan}}</span>
          </span>
          <span class="text">券后</span>
          <div class="sold-wrapper">
            <span class="text">销量</span>
            <span class="sold-num">{{key.sell}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pullup-goods">
      <div class="label">商品加载中...</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      host:this.$host
    };
  },
  props: ["productList"]
};
</script>
<style scoped>
.scrollable{
  position: relative;
}
.scrollable {
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-box-flex: 1;
  background-color: #faf5f6;
}
.goods-list,
.goods-list2 {
  padding: 0.4em 0.2em 0.2em;
  text-align: center;
  overflow: hidden;
}
.goods-list .goods-item,
.goods-list .goods-item-ads {
  width: 48%;
  display: block;
  text-align: left;
  margin-bottom: 0.8rem;
  margin-left: 1%;
  float: left;
}
.goods-list .goods-item a.img,
.goods-list .goods-item-ads a.img {
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  z-index: 1;
  background: #f5f5f5;
}
.goods-list .goods-item a.img .coupon-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
  font-size: 10px;
  background: -moz-linear-gradient(left, #f2ae2e, #fe8102);
  background: -o-linear-gradient(left, #f2ae2e, #fe8102);
  background: -webkit-gradient(
    linear,
    0 0,
    100% 100%,
    from(#f2ae2e),
    to(#fe8102)
  );
  height: 1.5rem;
  line-height: 1.5rem;
  color: #fff;
  border-radius: 1px;
  width: 50px;
  text-align: center;
  float: right;
  font-family: "Microsoft Yahei";
}
.goods-list .goods-item a.img .coupon-wrapper b {
  font-family: Arial;
  font-size: 10px;
  font-weight: 400;
}
.goods-list .goods-item a.img img.lazy {
  background: #f5f5f5;
}
.goods-list .goods-item a.img img,
.goods-list .goods-item-ads a.img img {
  width: 100%;
  height: 100%;
  border: none;
  vertical-align: top;
}
.goods-list .goods-item a.title,
.goods-list .goods-item-ads a.title {
  width: 100%;
  margin-top: 0.2em;
  display: block;
}
.goods-list .goods-item a.title .text,
.goods-list .goods-item-ads a.title .text {
  word-break: break-all;
  overflow: hidden;
  color: #777;
  font-size: 14px;
  line-height: 2rem;
  text-align: left;
  height: 2rem;
  margin: 0 5px;
}
.goods-list .goods-item .price-wrapper,
.goods-list .goods-item-ads .price-wrapper {
  position: relative;
  margin: 0.2em 5px;
  overflow: hidden;
}
.goods-list .goods-item .price-wrapper .price,
.goods-list .goods-item-ads .price-wrapper .price {
  color: #fe0000;
  font-size: 14px;
  margin-left: -0.3em;
  display: inline-block;
  margin-top: 0.1em;
  font-family: PingFang-SC-Bold, Arial;
}
.goods-list .goods-item .price-wrapper .price span,
.goods-list .goods-item-ads .price-wrapper .price span {
  font-size: 16px;
  font-family: Arial;
  line-height: 24px;
}
.goods-list .goods-item .price-wrapper .text {
  color: #aaa;
  font-size: 12px;
  display: inline-block;
  margin-left: 5px;
}
.goods-list .goods-item .price-wrapper .sold-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 30px;
}
.goods-list .goods-item .price-wrapper .sold-wrapper .text {
  color: #888;
  font-size: 10px;
}
.goods-list .goods-item .price-wrapper .sold-wrapper .sold-num {
  color: #888;
  font-size: 10px;
  font-family: Arial;
  margin-left: 4px;
}
.goods-list .goods-item:nth-child(2n) {
    margin-right: 1%;
    float: right;
}
</style>
