<template>
  <div class="tab bgWhite classify" ref="wraper">
    <ul class="tab_content" ref="tabcontent">
      <li class="tab_item" v-for="(item,index) in classifyList" ref="tabitem" :key="index">
        <span :class="status==index?'active':''" @click="changeStatus(index,item.fid)" >{{item.name}}</span>
        <img src="" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data: function() {
    return {
      status: 0
    };
  },
  props: ["classifyList"],
  created() {
  
  },
  mounted() {
  this.InitTabScroll();
    
  },
  methods: {
    InitTabScroll(){
      this.$nextTick(() => {//等待dom或者数据更新后回调
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wraper, {
            startY: 0,
            click: true,
            scrollX: false,
            scrollY: true,
            eventPassthrough: "horizontal"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    changeStatus(i,fid){
    this.status=i;
    this.$emit("getFidClassify",fid)
  },
  height(){
    let h = 0;
      for (let i = 0; i < this.classifyList.length; i++) {
        h+= this.$refs.tabitem[i].getBoundingClientRect().height;  //计算高度
        
      }
      
  }

  }
  
};
</script>
<style  scoped>
.classify {
  width: 20%;
  background-color: #f4f4f4;
  height: calc(100vh - 11.5rem);
  overflow: hidden;
}

.tab_content {
  min-width: 100%;
  overflow: auto;

}
.tab_item span {
  line-height: 4.5rem;
  display: block;
  height: 4.5rem;
  color: #333;
  z-index: 10;
  font-size: 1.3rem;
  text-align: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0.68, 0.15, 1) 0s;
  -webkit-transition: all 0.4s cubic-bezier(0.4, 0.68, 0.15, 1) 0s;
  border-left: 0.2rem solid transparent;
}
.tab_item .active {
  border-bottom: 0;
  border-left: 0.2rem solid #fc3f78;
  background-color: #fff;
}
</style>
              