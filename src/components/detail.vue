<template>
  <div class="details">
    <mt-header fixed title="商品详情"></mt-header>
    <div class="goods_banner">
      <img :src="'/static/picture/'+plist.img">
    </div>
    <div class="goods_info bgWhite">
      <h1 class="col-mar">
        <span>优选</span>
        {{plist.title}}
      </h1>
      <div class="info row-s col-mar">
        <div class="col-12-6 text-left col-money">
          券后价
          <span class>
            <i>¥</i>
            {{plist.price.toFixed(2)}}
          </span>
        </div>
        <div class="col-12-6 text-right">已售{{plist.sell>0 ? plist.sell:0}}单</div>

        <div class="col-12-6 text-left col-888">天猫价 ¥{{plist.oldPrice.toFixed(2)}}</div>
        <div class="col-12-6 text-right auth">
          <span>
            <i class="iconfont icon-detail_icon col-money"></i>包邮
          </span>
          <span>
            <i class="iconfont icon-detail_icon col-money"></i>运费险
          </span>
        </div>
      </div>

      <div class="goods_quan row-s">
        <!--  -->
        <a class="row getGoodsLink" href="javascript:;">
          <div class="col-12-8 money">
            <p>
              <span>{{plist.quan}}</span> 元优惠券
            </p>
            使用期限:{{timeStart}}-{{timeEnd}}
          </div>
          <div class="col-12-4 name">
            <span>立即领券</span>
          </div>
        </a>
        
        <img src="/static/picture/goods_quan.png">
      </div>
      <div class="goods_desc col-mar col-888">{{plist.subtitle}}</div>
    </div>
    <div class="goods_reco bgWhite">
      <h3>宝贝详情</h3>
      <div class="imglist">
        <div v-for="(key,index) in detailList" :key="index">
          <img :src="'/static/picture/'+key">
        </div>
      </div>
    </div>
    <div class="goods_shop_cart" ui-footprint data-item="goodsItem" data-type="1">
      <div class="cent row-s flex">
        <div class="col-12-2 text-center but">
          <a href="javascript:;">
            <p class="img">
               <i class="iconfont icon-shoucang"></i>
            </p>分享
          </a>
        </div>
        <div class="col-12-2 text-center but" style=" position: relative; left: -.7rem;">
          <a
            href="javascript:;"
            ui-add-collection
            data-id="17728232"
            data-dtk-satc="{gid:'17728232',desc:'收藏',name:'DetailGoodsEvent'}"
          >
            <p class="img">
              <i class="iconfont icon-shoucang"></i>
            </p>收藏
          </a>
        </div>
        <!-- 领券购买 不领券 -->
        <div class="col-12-2 text-center but quan">
          <a class="col-main getGoodsLink">
            <p class="img">
              <i class="iconfont icon-gouwuche"></i>
            </p>购物车
          </a>
        </div>
        <div class="col-12-5">
          <a class="btn btn-primary btn-block but-money getGoodsLink">
            <p class="money">
              <span>¥</span>
              {{plist.price.toFixed(2)}}
            </p>立即购买
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      plist: {
        price: 0,
        img: "",
        oldPrice: 0,
        title: "",
        subtitle: "",
        specs: [],
        sell: 0
      },
      timeStart: 0,
      timeEnd: 0,
      detailList: []
    };
  },
  props: [],
  created() {
    this.getDetail();
    this.getTime(7);
  },
  methods: {
    getDetail() {
      let pid = this.$route.params.pid;
      this.$axios
        .get(this.$host + "/products/detail", {
          params: {
            pid
          }
        })
        .then(msg => {
          var res = msg.data;
          console.log(msg.data);
          if (res.code == 1) {
            this.plist = res.list;
            let arr = res.list.details.split("&");
            for (let i = 0, len = arr.length; i < len; i++) {
              console.log(i);
              this.detailList[i] = arr[i];
            }
          }
        });
    },
    getTime(d) {
      //获取时间
      let date1 = new Date();
      this.timeStart = date1.toLocaleDateString().replace(/\//g, ".");
      let date2 = new Date(date1);
      date2.setDate(date1.getDate() + d);
      this.timeEnd = date2.toLocaleDateString().replace(/\//g, ".");
      // console.log(date2.toLocaleDateString());
    }
  }
};
</script>
<style scoped>
.details {
  text-align: left;
}
.goods_banner img {
  display: block;
  width: 100vw;
  height: 100vw;
}
.goods_info h1 {
  font-size: 2rem;
  font-weight: 400;
  padding: 1rem 0 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods_info h1 span {
  border: 1px solid #fc3f78;
  color: #fc3f78;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -o-border-radius: 2px;
  -ms-border-radius: 2px;
  padding: 0 5px;
  margin-right: 5px;
  font-size: 0.785rem;
  top: -1px;
}
.goods_info h1 span,
.goods_quan {
  position: relative;
  z-index: 1;
  zoom: 1;
}
.goods_info > .info > div {
  font-size: 1.2rem;
  height: 2rem;
  line-height: 2rem;
  color: #666;
  float: left;
}
.goods_info > .info .col-money {
  color: #fc4d52;
}
.goods_info > .info .col-money span {
  font-size: 3.5rem;
}
.goods_info > .info .col-money i {
  font-style: normal;
  font-size: 1rem;
  margin-right: 0.3rem;
}
.goods_info > .info .col-888 {
  color: #888;
}
.goods_info > .info .auth,
.goods_info > .info .col-888 {
  color: #888;
}
.goods_info > .info .auth span {
  margin-left: 0.8rem;
}
.goods_quan {
  position: relative;
  z-index: 1;
  zoom: 1;
}
.goods_quan:before {
  content: "";
  width: 2px;
  height: 55%;
  background: url(./../assets/images/hr.png);
  -webkit-background-size: auto 100%;
  -moz-background-size: auto 100%;
  background-size: auto 100%;
  position: absolute;
  z-index: 1;
  zoom: 1;
  left: 64%;
  top: 20%;
  display: block;
}
.goods_quan .row {
  display: block;
  position: absolute;
  z-index: 1;
  zoom: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.goods_quan .row > div {
  float: left;
}
.goods_quan .row .money {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  padding-top: 6%;
  line-height: 1.5rem;
  position: relative;
  z-index: 1;
  zoom: 1;
  left: 0.8rem;
}
.goods_quan .row .money p {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
}
.goods_quan .row .money p span {
  font-size: 1.4rem;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 0.1rem;
}
.goods_quan .row .name {
  line-height: 100%;
  color: #fff;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 50%;
  margin-top: -0.6rem;
  text-align: left;
  font-weight: 600;
}
.goods_quan .row .name span {
  margin-left: 15%;
}
.goods_quan img {
  display: block;
  width: 100%;
}
.goods_desc {
  font-size: 1.2rem;
  line-height: 1.4rem;
  padding: 0.5rem 0 1.4rem;
  color: #888;
}
.goods_reco {
  margin: 0.8rem 0 5.5rem;
}
.goods_reco > h3 {
  height: 4.5rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 4.5rem;
  text-align: center;
}
.goods_reco .imglist img {
  display: block;
  width: 100%;
}

/*底部固定*/
.goods_shop_cart {
  position: fixed;
  zoom: 1;
  bottom: 0;
  z-index: 500;
  left: 0;
  width: 100%;
}
.goods_shop_cart > .cent {
  position: relative;
  zoom: 1;
  z-index: 5;
  background: #fff;
  box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.1);
  height: 5rem;
}
.goods_shop_cart .but p.img {
  position: relative;
  z-index: 1;
  zoom: 1;
  top: -3px;
}
.goods_shop_cart .but p {
  padding-top: 3px;
  height: 22px;
}
.goods_shop_cart .but p.img img {
  height: 25px;
}
.goods_shop_cart .but {
  padding-top: 0.7rem;
  font-size: 1.2rem;
}
.goods_shop_cart .but p.img .iconfont {
  font-size: 22px;
  color: #777;
  top: 1px;
}
.goods_shop_cart .quan {
  position: relative;
  z-index: 1;
  zoom: 1;
  left: -0.7rem;
}
.goods_shop_cart .btn.but-money {
  line-height: inherit;
  font-size: 14px;
  display: block;
  height: 100%;
  box-sizing: border-box;
}
.goods_shop_cart .btn.but-money p.money {
  font-size: 24px;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 1px;
}
.goods_shop_cart .btn.but-money p.money span {
  font-size: 1.4rem;
}
.row-s.cent {
  text-align: center;
}
.row-s a {
  color: #666;
}
.btn.btn-primary {
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 0.36rem 0.85rem;
  background: -moz-linear-gradient(left, #fbaa58 0, #fa4dbe 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left right,
    color-stop(0, #fbaa58),
    color-stop(100%, #fa4dbe)
  );
  background: -webkit-linear-gradient(left, #fbaa58 0, #fa4dbe 100%);
  background: -o-linear-gradient(left, #fbaa58 0, #fa4dbe 100%);
  background: -ms-linear-gradient(left, #fbaa58 0, #fa4dbe 100%);
  background: linear-gradient(to left, #fbaa58 0, #fa4dbe 100%);
}
</style>
