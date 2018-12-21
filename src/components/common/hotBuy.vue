<template>
  <div class="home_ant_voucher">
    <h3 class="home_h3 row-s">
      <div class="col-mar">
        <div class="col-12-4 text-left">
          <i></i>咚咚抢
        </div>
      </div>
    </h3>
    <div class="swiper-container swiper-container-horizontal">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
        <!-- slides -->
        <swiper-slide v-for="(key,index) in hotqgList" :key="index" class="swiper-slide">
          <router-link :to="'/detail/'+key.pid">
            <div class="swiper-cent">
              <div class="cent">
                <div  class="img">
                  <img :src="host+'/static/picture/'+key.img" alt>
                  <p class="text">
                    {{key.people}}万
                    <span>人已领</span>
                    <i>|</i>
                    {{key.quan}}元券
                  </p>
                </div>
                <p class="name">{{key.title}}</p>
                <p class="money">
                  <i>¥</i>
                  {{(key.price-key.quan).toFixed(2)}}
                  <del>¥{{key.price.toFixed(2)}}</del>
                </p>
                <!-- <p class="progress" data-progress="53">
                  <i style="width: 53%;"></i>
                </p> -->
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      host:this.$host,
       swiperOption: {
         slidesPerView:"auto"
      }
    };
  },
  props: ["hotqgList"],
  components:{
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    display: block;
    flex-shrink: 0;
    width: 40%!important;
}
.home_ant_voucher div.swiper-slide .swiper-cent {
    margin-right: 5px;
    height: 100%;
}
.home_ant_voucher div.swiper-slide .swiper-cent .cent {
    padding: 10px 10px 0;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
    position: relative;
    z-index: 1;
    zoom: 1;
}
.home_ant_voucher div.swiper-slide .img {
    display: block;
    position: relative;
    zoom: 1;
    z-index: 1;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
}
.home_ant_voucher div.swiper-slide .img img {
    width: 100%;
    display: block;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
}
.home_ant_voucher div.swiper-slide .img .text {
    position: absolute;
    zoom: 1;
    z-index: 10;
    bottom: 0;
    left: -4px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    background: -moz-linear-gradient(left,rgba(255,113,233,.91) 0,rgba(254,92,158,.91) 100%);
    background: -webkit-gradient(linear,left top,left right,color-stop(0,rgba(255,113,233,.91)),color-stop(100%,rgba(254,92,158,.91)));
    background: -webkit-linear-gradient(left,rgba(255,113,233,.91) 0,rgba(254,92,158,.91) 100%);
    background: -o-linear-gradient(left,rgba(255,113,233,.91) 0,rgba(254,92,158,.91) 100%);
    background: -ms-linear-gradient(left,rgba(255,113,233,.91) 0,rgba(254,92,158,.91) 100%);
    background: linear-gradient(to left,rgba(255,113,233,.91) 0,rgba(254,92,158,.91) 100%);
    color: #fff;
    padding: 3px 4px;
    font-size: .785rem;
    text-align: center;
}
.home_ant_voucher div.swiper-slide .name {
    line-height: 2rem;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#777;
    text-align: left;
}
.home_ant_voucher div.swiper-slide .money {
    color: #FC4D52;
    font-size: 1.2rem;
    padding-bottom: 10px;
    text-align: left;
}
.home_ant_voucher div.swiper-slide .money i {
    font-style: normal;
    font-size: .7rem;
    margin-right: 3px;
}
.home_ant_voucher div.swiper-slide .money del {
    color: #bbb;
    font-size: 1rem;
}
.home_ant_voucher div.swiper-slide .swiper-cent .cent .progress {
    position: absolute;
    z-index: 1;
    zoom: 1;
    left: 0;
    bottom: 0;
    overflow: hidden;
    height: 3px;
    background-color: #FFD6EC;
    width: 100%;
}
.home_ant_voucher div.swiper-slide .swiper-cent .cent .progress i {
    display: block;
    height: 3px;
    overflow: hidden;
    background-color: #FF66B7;
    width: 5px;
    transition: all 1s ease 0s;
    -o-transition: all 1s ease 0s;
    -moz-transition: all 1s ease 0s;
    -webkit-transition: all 1s ease 0s;
    transform-origin: center;
}
</style>