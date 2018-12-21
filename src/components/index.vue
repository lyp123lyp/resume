<template>
  <div class="indexPage" ref="indexPage">
    <mt-header fixed title="爱优选商城"></mt-header>
    <div class="scroll-show-hide" ref="scrollSH">
      <div class="scroll-position">
        <Search></Search>
        <div class="goToSearch" @click="goToSearch"></div>
        <div class="scrollBox bgWhite" :style="{'transform':'translateY(-'+translateY+'px)'}">
          <div class="better bgWhite">
            <div class="active icon-jx">精选</div>
          </div>
          <ScrollX :TabList="TabList" ref="scrollX" v-if="TabList.length"></ScrollX>
          <div class="showNavList" :class="{'bgColor':isShow}">
            <div class="toggleNavList">
              <div class="ullit_tab" :class="{'slideDown':isShow}">选择分类</div>
              <SlideDown :TabList="TabList"></SlideDown>
            </div>
          </div>
          <div class="icon bgWhite" @click="showHideNavList">
            <img :class="{'rotate180':isShow}" src="../assets/images/xiangxia.png" alt>
          </div>
        </div>
      </div>
    </div>
    <div class="swipeBox">
      <Swipe :swipeList="swipeList"></Swipe>
    </div>
    <div class="home_nav mtb5 bgWhite">
      <ul class="row-s flex">
        <li class="col-12-3" v-for="(item,index) in honeIconNav" :key="index">
          <router-link :to="item.href" :data-el="index">
            <i class="iconfont">
              <img :src="'/static/picture/'+item.img">
            </i>
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mtb5 bgWhite">
      <HotBuy :hotqgList="hotqgList"></HotBuy>
    </div>
    <div class="jpt bgWhite mtb5">
      <Jupintuan :jupintuan="jupintuan"></Jupintuan>
    </div>
    <div class="ljzq bgWhite mtb5w">
      <Lingquanzhuanqu :productList="productList"></Lingquanzhuanqu>
    </div>
    <div class="fTitle mtb5 bgWhite">——我是有底线的——</div>
  </div>
</template>
<script>
import Search from "./common/search";
import ScrollX from "./common/scrollX.vue";
import SlideDown from "./common/slideDown.vue";
import Swipe from "./common/swipe.vue";
import HotBuy from "./common/hotBuy.vue";
import Jupintuan from "./common/jupintuan.vue";
import Lingquanzhuanqu from "./common/lingquanzhuanqu.vue";
export default {
  name: "Index",
  data() {
    return {
      translateY: 0,
      isShow: false,
      TabList: [
        
      ],
      swipeList: [
        { src: "/static/picture/lunbo1.jpg", pid: 1 },
        { src: "/static/picture/lunbo2.jpg", pid: 2 },
        { src: "/static/picture/lunbo3.jpg", pid: 3 },
        { src: "/static/picture/lunbo4.jpg", pid: 4 }
      ],
      honeIconNav: [
        { href: "/", img: "9.9.png", name: "9.9包邮" },
        { href: "/", img: "hot.png", name: "疯狂排行" },
        { href: "/", img: "qianggou.png", name: "咚咚抢" },
        { href: "/", img: "ping.png", name: "聚拼团" }
      ],
      hotqgList: [
        {
          pid: 7,
          img: "O1CN01G9WUYX1DhchPQfIzF_!!2543660248.jpg",
          people: 2.8,
          quan: 200,
          title: "【俞兆林】加厚法兰绒四件套",
          price: 368
        },
        {
          pid: 8,
          img: "O1CN01IlQ8yG1ceIDtld08c_!!3335503625.jpg",
          people: 5.9,
          quan: 20,
          title: "鸿星尔克运动鞋男女鞋轻便跑鞋休闲情侣鞋",
          price: 119
        },
        {
          pid: 9,
          img: "O1CN01lj5MYc1C5mMdxQC1v_!!916730030.jpg",
          people: 1.9,
          quan: 20,
          title: "佳帮手高楼双层擦玻璃清洁神器",
          price: 34.9
        },
        {
          pid: 10,
          img: "TB2vxhTeMnH8KJjSspcXXb3QFXa_!!924075671.jpg",
          people: 5.2,
          quan: 20,
          title: "韩版中大童女男宝宝小背心春秋冬棉",
          price: 29.9
        }
      ],
      jupintuan: {
        title_img: "/static/picture/O1CN012JJhsIdrfdTFXkr-2053469401.png"
      },
      productList: {
        header: "领券专区",
        shopList: [
          {
            pid: 5,
            title: "【专利设计】落地不锈钢卫生间置物架",
            img:
              "/static/picture/O1CN01dLtlXT1ajfduBT5Q7_!!801493366.png_310x310.jpg",
            price: 19.9,
            sell: 3.3,
            quan: 5
          },
          {
            pid: 6,
            title: "【拍2件49.8】百搭休闲仙女裤",
            img:
              "/static/picture/O1CN01hw8GmB2MPbqpFWwXO_!!1637899820.jpg_310x310.jpg",
            price: 39.9,
            sell: 1.6,
            quan: 10
          }
        ]
      }
    };
  },
  mounted() {
    this.$refs.indexPage.scrollIntoView(true);
    //请求
    this.$axios.get(this.$host+"/index").then(res=>{
       // console.log(res);
        this.TabList=res.data.family;
        this.$localStorage.set("classifyList",this.TabList);
    })
    window.addEventListener("scroll", this.handleScroll);
  },
  computed:{
    scrollSH(){
       var h=this.$refs.scrollSH.getBoundingClientRect().height;
        return h;
    }
  },
  methods: {
    goToSearch(){
      this.$router.push('/search')
    },
    showHideNavList(options){
      // console.log(options)
      this.isShow=!this.isShow;
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.translateY = scrollTop;
      var h=this.scrollSH;
      if (scrollTop >h) {
        this.translateY = h;
      } else {
        this.translateY = scrollTop;
        this.isShow=false;
      }
    },
    
  },
  components: {
    Search,
    ScrollX,
    SlideDown,
    Swipe,
    HotBuy,
    Jupintuan,
    Lingquanzhuanqu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indexPage {
  height: 8.6rem;
}

.scroll-show-hide {
  /* position: absolute; */
  height: 4rem;
  width: 100vw;
  max-width: 828px;
  z-index: 5;
  top: 40px;

  transform-origin: center;
}
.scroll-position {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
}
.scrollBox {
  position: fixed;
  top: 4rem;
  margin-top: 40px !important;
  left: 0;
  right: 0;
  height: 4rem;
  width: 100%;
  text-align: center;
  z-index: 100;
  font-size: 14px;
  /* transition: all .4s ease 0s; */
}
.scrollBox .better,
.scrollBox .icon {
  position: absolute;
  top: 0;
  width: 12.5%;
  height: 100%;
  line-height: 4rem;
}
.scrollBox .better {
  left: 0;
  overflow: hidden;
  z-index: 100;
}

.scrollBox .better .icon-jx {
  padding: 0 5px;
  transform: translateY(0);
  transition: all 0.4s ease 0s;
}
.scrollBox .icon {
  right: 0;
  display: flex;
  z-index: 102;
  overflow: hidden;
}
.icon img {
  width: 40px;
  height: 40px;
  margin: auto;
  transition: all 0.4s ease 0s;
  transform-origin: center;
}

.ullit_tab {
  opacity: 0;
  transition: all 0.4s ease 0s;
  position: absolute;
  zoom: 1;
  background: #fff;
}
.ullit_tab {
  height: 4rem;
  line-height: 4rem;
  color: #333;
  text-align: left;
  text-indent: 2rem;
  top: 0;
  width: 100%;
  z-index: 101;
  transform: translateY(-100%);
}

.ullit_tab.slideDown,
.showNavList.slideDown {
  opacity: 1;
  transform: translateY(0);
}
.rotate180 {
  transform: rotate(180deg);
}
.toggleNavList {
  width: 100%;
  position: absolute;
  overflow: hidden;
  padding-top: 4rem;
  left: 0;
}
.goToSearch {
  position: absolute;
  width: calc(100% - 1.5rem);
  top: 0.8rem;
  left: 1.5rem;
  height: calc(100% - 1.6rem);
}
</style>
