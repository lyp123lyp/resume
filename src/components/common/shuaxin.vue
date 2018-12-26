<template>
  <div class="tmpl">
    <div class="main-body" ref="wrapper">
      <mt-loadmore
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
        :autoFill="isAutoFill"
      >
        <ul class="goods-two">
          <li class="row-s listpage1" v-for="(key,index) in datas" :key="index" ref="lqli">
            <router-link :to="'/detail/'+key.pid">
              <p class="img">
                <img v-lazy="host+'/static/picture/'+key.img">
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
                    <i>¥</i>
                    {{(key.price-key.quan).toFixed(2)}}
                  </span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="fTitle mtb5 bgWhite" v-if="len==pno">——我是有底线的——</div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import {Toast} from "mint-ui";

export default {
  data() {
    return {
      host: this.$host,
      datas: [],
      //可以进行上拉
      allLoaded: false,
      //是否自动触发上拉函数
      isAutoFill: false,
      // wrapperHeight: 0,
      pno: 0,
      len: 1
    };
  },
  created() {
    this.loadMore();
  },
  mounted() {
    // 父控件要加上高度，否则会出现上拉不动的情况
    // this.wrapperHeight =
    //   document.documentElement.clientHeight -
    //   this.$refs.wrapper.getBoundingClientRect().top;
  },
  computed: {},
  methods: {
    //   下拉刷新

    // 上拉加载
    loadBottom() {
      this.loadMore();
    },

    // 加载更多
    loadMore() {
      if (this.pno == this.len) return;
      this.$axios({
        url: this.$host + "/index/",
        methods: "get",
        params: {
          pno: this.pno
        }
      })
        .then(response => {
          // concat数组的追加
          console.log(response);
          this.datas = this.datas.concat(response.data.ling_quan);
          console.log(this.datas.length);
          this.pno++;
          console.log(this.pno);
          this.len = response.data.len;
          if (this.pno >= this.len) {
            this.allLoaded = true; // 若数据已全部获取完毕
            Toast({
              message: "没有更多了",
              position: "bottom",
              duration: 2000
            });
          }
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(error => {
          console.log(error);
          Toast({
              message: "网络错误",
              position: "middle",
              duration: 2000
            });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  overflow: scroll;
}
.goods-two li {
  padding: 0.7rem 0 0 0.7rem;
  text-align: left;
}
.goods-two li .img,
.goods-two li .img {
  float: left;
  background-color: #eee;
  position: relative;
  z-index: 1;
  zoom: 1;
}
.goods-two li .img,
.goods-two li .img img {
  width: 9rem;
  height: 9rem;
}
.goods-two li div.cent {
  height: 9rem;
  margin-left: 10.5rem;
  padding-bottom: 0.7rem;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 0.4rem;
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
  margin-bottom: 0.8rem;
  overflow: hidden;
}
.goods-two li div.cent .col-aaa {
  padding-top: 1rem;
  font-size: 0.785rem;
  color: #aaa;
  line-height: 1.5rem;
  padding-right: 10px;
}
.goods-two li div.cent .money {
  font-size: 0.785rem;
  height: 24px;
}
.col-money {
  color: #fc4d52;
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
  background: -moz-linear-gradient(left, #ff5e5e 0, #ff927c 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left right,
    color-stop(0, #ff5e5e),
    color-stop(100%, #ff927c)
  );
  background: -webkit-linear-gradient(left, #ff5e5e 0, #ff927c 100%);
  background: -o-linear-gradient(left, #ff5e5e 0, #ff927c 100%);
  background: -ms-linear-gradient(left, #ff5e5e 0, #ff927c 100%);
  background: linear-gradient(to left, #ff5e5e 0, #ff927c 100%);
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
  font-size: 0.785rem;
  min-width: 3rem;
  text-align: center;
  padding: 1px 10px;
  color: #fff;
  padding: 3px 10px;
}

.goods-two li div.cent .quan i:after,
.goods-two li div.cent .quan i:before {
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
.goods-two li div.cent .quan i:after {
  left: -4px;
}
.goods-two li div.cent .money span {
  font-size: 2rem;
  margin-right: 0.5rem;
}
</style>
