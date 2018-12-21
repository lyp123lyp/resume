<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in swipeList" :key="index">
      <router-link :to="'/detail/'+item.pid">
        <img :src="host+''+item.src">
      </router-link>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true
      },
      host:this.$host
    };
  },
  props: ["swipeList"],
  components: {
    swiper,
    swiperSlide
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
   // console.log("mounted");
  }
};
</script>
<style scoped>
.swiper-slide img{
    display: block;
    width: 100%;
}
</style>
