<template>
  <div class="home_ant_juhuasuan">
    <div class="tab row-s col-mar">
      <router-link to="/jupingtuan" class="flex header">
        <h3 class="fl  col-12-3"><img :src="jupintuan.title_img" alt=""></h3>
        <div class="fr text-right col-12-9">查看更多拼团<i class="iconfont icon-xiangyou"></i></div>
      </router-link>
    </div>
    <ul class="ullit row-s flex">
      <li v-for="(key,index) in juhuasuan.jptList" :key="index" class="col-12-3">
        <router-link
          :to="'/'+key.href"
          data-el="index"
        >
          <div class="img">
            <img
              :src="host+'/static/picture/'+key.src"
            >
            <div class="name">
              <b>{{key.sub}}</b>
              <span>
                <i>￥</i>{{key.price}}
              </span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        host:this.$host,
        juhuasuan:{
            more:"查看更多拼团",
            jptList:[{
                href:'jupintuan',
                src:"index_jpt1.jpg",
                sub:'拼团价',
                price:"34.3"
            },{
                href:'jupintuan',
                src:"index_jpt2.jpg",
                sub:'拼团价',
                price:"15.1"
            },
            {
                href:'jupintuan',
                src:"index_jpt3.jpg",
                sub:'拼团价',
                price:"295"
            },
            {
                href:'jupintuan',
                src:"index_jpt4.jpg",
                sub:'拼团价',
                price:"35.8"
            }]

        }
    };
  },
  props:["jupintuan"]

};
</script>
<style scoped>
.header{
    line-height: 45px;
     color: #777;
}
.header h3{
     line-height: 45px;
    height: 45px;
    overflow: hidden;
       
}
.header h3 img{
    height: 18px;
    vertical-align: middle;
}
.header .col-12-9{
    margin-right: 10px; 
}
.iconfont{
    margin-left: 5px;
    font-size: 12px;
}
.home_ant_juhuasuan .ullit {
    clear: both;
    margin: 0 5px;
    padding-bottom: 10px;
}
.home_ant_juhuasuan .ullit li{
    position: relative;
}
.home_ant_juhuasuan .ullit li .img {
    display: block;
    margin: 0 5px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    z-index: 0;
   
}
.home_ant_juhuasuan .ullit li img{
    width: 100%;
    height: auto;
}
.home_ant_juhuasuan .ullit li .img .name {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20px;
    line-height: 22px;
    font-size: 12px;
    background: #FC4D52;
    color: #fff;
    width: 100%;
    overflow: hidden;
    z-index: 10;
}
.home_ant_juhuasuan .ullit li .img .name:before {
    content: "";
    background: #FFE7C9;
    width: 300px;
    height: 100px;
    position: absolute;
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
    left: 43%;
    bottom: -90px;
    z-index:-1
}
.home_ant_juhuasuan .ullit li .img .name span,
.home_ant_juhuasuan .ullit li .img .name i {
    color: #FC4D52;
    font-size: 12px;
    font-family: Arial;
    line-height: 20px;
}
</style>