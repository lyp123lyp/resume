<template>
  <div class="tab bgWhite" ref="tab">
    <ul class="tab_content" ref="tabcontent">
      <li class="tab_item" v-for="(item,index) in TabList" ref="tabitem" :key="index">
        <span  @click="searchProducts(encodeURI(item.name))">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data: function() {
    return {
      
    };
  },
  props: ["TabList"],
  mounted() {
    this.InitTabScroll();
  },
  computed:{
    
  },
  methods: {
    InitTabScroll(){
      let width = 0;
      for (let i = 0; i < this.TabList.length; i++) {
        var w = this.$refs.tabitem[i].getBoundingClientRect().width;  
        width+=w;
      }
      this.$refs.tabcontent.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tab, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    searchProducts(key){
      this.$router.push("/products/"+decodeURI(key));
    }
  }
};
</script>
<style  scoped>
.tab {
  width: 75%;
  height: 4rem;
  line-height: 4rem;
  overflow: hidden;
  position: absolute;
  left: 12.5%;
  z-index: 100;
}
.tab_content {
  height: 100%;
  min-width: 100%;
  overflow: auto;
}
.tab_item {  
  float: left;
  height: 4rem;
 
}
.tab_item span{
  display:block;
  height: 100%;
  color: #777;
  padding: 0 1.5rem;
}
.active {
  height: 4rem;
  border-bottom: 2px solid #fc3f78;
  color: #fc3f78;
  display: block;
  box-sizing: border-box;
}
</style>
              