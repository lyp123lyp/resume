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
      <ul class="goods-two">
        <li class="row-s listpage1" v-for="(key,index) in productList.shopList" :key="index">
          <router-link
           :to="'/detail/'+key.pid"
          >
            <p class="img">
              <img
                :src="host+''+key.img"
              >
            </p>
            <div class="cent">
              <h3>{{key.title}}</h3>
              <div class="num col-aaa">
                <span>天猫价{{(key.price).toFixed(2)}}</span>
                <span class="fr">已售{{key.sell}}万件</span>
              </div>
              <div class="money col-money">
                <p class="quan fr">
                  <i>{{key.quan}}元券</i>
                </p>券后价
                <span class>
                  <i>¥</i>{{(key.price-key.quan).toFixed(2)}}
                </span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
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
 props:['productList']
};
</script>
<style scoped>
.goods-two li {
    padding: .7rem 0 0 .7rem;
     text-align: left;
}
.goods-two li .img, .goods-two li .img {
    float: left;
    background-color:#eee;
    position: relative;
    z-index: 1;
    zoom: 1;
}
.goods-two li .img, .goods-two li .img img {
    width: 9rem;
    height: 9rem;
    
}
.goods-two li div.cent {
    height: 9rem;
    margin-left: 10.5rem;
    padding-bottom: .7rem;
    position: relative;
    z-index: 1;
    zoom: 1;
    top: .4rem;
}
.goods-two li div.cent h3 {
   
    color: #333;
    line-height: 1.6rem;
    font-size: 1rem;
    font-weight: 400;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 3.4rem;
    margin-right: 10px;
    margin-bottom: .8rem;
    overflow: hidden;
}
.goods-two li div.cent .col-aaa {
    padding-top: 1rem;
    font-size: .785rem;
    color: #aaa;
    line-height: 1.5rem;
    padding-right: 10px;
}
.goods-two li div.cent .money {
    font-size: .785rem;
    height: 24px;
}
.col-money {
    color: #FC4D52;
}
.goods-two li div.cent .money .quan {
    padding: 0;
    position: relative;
    z-index: 1;
    zoom: 1;
    top: 0;
    display: inline-block;
    margin-right: 10px;
    overflow: hidden;
}
.goods-two li div.cent .quan i {
    background: -moz-linear-gradient(left,#FF5E5E 0,#FF927C 100%);
    background: -webkit-gradient(linear,left top,left right,color-stop(0,#FF5E5E),color-stop(100%,#FF927C));
    background: -webkit-linear-gradient(left,#FF5E5E 0,#FF927C 100%);
    background: -o-linear-gradient(left,#FF5E5E 0,#FF927C 100%);
    background: -ms-linear-gradient(left,#FF5E5E 0,#FF927C 100%);
    background: linear-gradient(to left,#FF5E5E 0,#FF927C 100%);
    position: relative;
    z-index: 1;
    zoom: 1;
    font-style: normal;
    display: block;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    -o-border-radius: 3px;
    -ms-border-radius: 3px;
    font-size: .785rem;
    min-width: 3rem;
    text-align: center;
    padding: 1px 10px;
    color: #fff;
    padding: 3px 10px;
}

.goods-two li div.cent .quan i:after, .goods-two li div.cent .quan i:before {
    position: absolute;
    z-index: 1;
    zoom: 1;
    top: 50%;
    margin-top: -3px;
    background: #fff;
    display: block;
    width: 5px;
    height: 5px;
    content: "";
    border-radius: 10px;
    border: 1px solid #fff;
}
.goods-two li div.cent .quan i:before {
    right: -4px;
}
.goods-two li div.cent .quan i:after{
   left: -4px;
}
.goods-two li div.cent .money span {
    font-size: 2rem;
    margin-right: .5rem;
}

</style>