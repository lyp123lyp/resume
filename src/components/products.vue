<template>
  <div class="allProduct">
    <div class="top">
      <mt-header fixed title="搜索详情"></mt-header>
    </div>
    <div class="search" ref="search">
      <SearchBox></SearchBox>
    </div>
    <div class="change" ref="change" :class="{fixed:isScroll}">
      <ChangeSort @ling="change"></ChangeSort>
    </div>
    <ProductList :productList="productList"></ProductList>
  </div>
</template>
<script>
import SearchBox from "./common/searchBox";
import ChangeSort from "./common/changeSort.vue";
import ProductList from "./common/productList.vue";
export default {
  data() {
    return {
      productList:[],
      isScroll: false
      
    };
  },
  created() {
    this.userpath();
  },
  computed: {
    height() {
      let search = this.$refs.search;
      let h = 0;
      if (search) h = search.getBoundingClientRect().height;
      return h;
    },
  },
   watch:{
    '$route' (to ,from){this.userpath();}
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },
  methods: {
    change(option) {
      //商品排序
      var cur = option.cur;
      var sort = option.sort;
      var arr = this.$localStorage.get("productList"),
        arr2 = [],
        len = arr.length;
      // console.log(arr);
      if (cur == 0) {
        this.productList = arr;
      } else {
        var newArr = [];
        for (var i = 0; i < len; i++) {
          if (cur == 1) {
            newArr[i] = Date.parse(arr[i].time);
          }
          if (cur == 2) {
            newArr[i] = arr[i].sell;
          }
          if (cur == 3) {
            newArr[i] = arr[i].price;
          }
        }
        newArr.sort(function(a, b) {
          return b - a;
        });
        for (var j = 0; j < len; j++) {
          for (var k = 0; k < len; k++) {
            if (cur == 1) {
              var time = Date.parse(arr[j].time);
              if (time == newArr[k]) {
                arr2[k] = arr[j];
                newArr[k] = "";
                break;
              }
            }
            if (cur == 2) {
              if (arr[j].sell == newArr[k]) {
                arr2[k] = arr[j];
                newArr[k] = "";
                break;
              }
            }
            if (cur == 3) {
              if (arr[j].price == newArr[k]) {
                arr2[k] = arr[j];
                newArr[k] = "";
                break;
              }
            }
          }
        }
        if (sort == 1) {
          arr2.reverse();
        }
        this.productList = arr2;
      }
    },
    scrollTop(){
      let scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let h = this.height;
      if (scrollTop > h) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
    userpath(){
      let kw= this.$route.params.keywords;
      this.$axios
        .get(this.$host + "/products/productList", { params: { kw } })
        .then(res => {
          this.productList=res.data;
          this.$localStorage.set("productList", res.data);
        });
    }
  },
  props: [],
  components: {
    SearchBox,
    ChangeSort,
    ProductList
  }
};
</script>
<style scoped>
.search,
.change {
  position: relative;
}
.change {
  height: 5rem;
  margin-bottom: 0.5rem;
}
.fixed .order-nav {
  position: fixed !important;
  max-width: 828px;
  top: 40px;
}
</style>
