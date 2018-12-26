<template>
    <div class="infoBox" :class="{infoHide:isHide}">
         <div class="shade" :class="{shadeHide:isHide}" @click="closeScreen">
    </div>
      <div class="alertInfo  bgWhite" :class="{alertHide:isHide}">
          <section class="img-title">
        <div class="product-div flex">
          <img class="product-list-img" :src="host+'/static/picture/'+plist.img" v-if="plist.img">
          <div class="product-text">
            <div class="dis-box flex">
              <h4 class="box-flex">{{plist.title}}</h4>
              <i class="close" @click="closeScreen">X</i>
            </div>
            <p class="p-price">¥{{plist.price}}</p>
            <p class="dis-box p-store">库存：{{plist.store}}</p>
          </div>
        </div>
      </section>
      <section>
        <div id="attributss" class="attributss" @click="checkStatus($event)">
          <div v-if="isGuiGe">
            <div class="s-name">
              <h6>规格类型:</h6>
            </div>
            <div>
              <span
                class="test"
                v-for="(key,index) in plist.guiGe"
                :key="index"
                :class="index==guiGe?'checked':''"
                :data-guige="index"
              >{{key}}</span>
            </div>
          </div>
          <div v-if="isColor">
            <div class="s-name">
              <h6>颜色:</h6>
            </div>
            <div>
              <span
                class="test"
                v-for="(key,index) in plist.color"
                :key="index"
                :class="index==color?'checked':''"
                :data-color="index"
              >{{key}}</span>
            </div>
          </div>
          <div v-if="isChiMa">
            <div class="s-name">
              <h6>尺码:</h6>
            </div>
            <div>
              <span
                class="test"
                v-for="(key,index) in plist.chiMa"
                :key="index"
                :class="index==chiMa?'checked':''"
                :data-chima="index"
              >{{key}}</span>
            </div>
          </div>
        </div>
        <div class="counts">
          <h6>数量</h6>
          <div class="div-num dis-box">
            <Addbutton  @ling="changeValue" :val="value"></Addbutton>
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </section>
      <section
        class="ect-button-more dis-box" >
        <span @click="addCart" class="addCart">加入购物车</span>
      </section>
      </div>
    
    </div>
</template>
<script>
import Addbutton from "./addbutton";
export default {
  data() {
    return {
      host: this.$host,
      guiGe: 0,
      color: 0,
      chiMa: 0,
      isGuiGe:false,
      isChiMa:false,
      isColor: false,
      value:1,
      tranY100:false,
    };
  },
  props: ["plist",'isHide'],
  computed: {
    property() {
      let spec=this.plist;
      let obj={"pid":spec.pid,"title":spec.title,"price":spec.price,"quan":spec.quan,"img":spec.img};
      if(this.isGuiGe)
      obj["guiGe"]=spec.guiGe[this.guiGe];
      if(this.isColor)
      obj["color"]=spec.color[this.color]
      if(this.isChiMa)
      obj["chiMa"]=spec.chiMa[this.chiMa]+"码";
      obj["value"]=this.value;
      return obj;
    }
  },
  methods:{
     showData(){
        let data=this.plist;
        if(data.guiGe.length)
        this.isGuiGe=true;
        if(data.color.length>0)
        this.isColor=true;
        if(data.chiMa.length>0)
        this.isChiMa=true;
     },
     checkStatus(e){
          let i=e.target.dataset;
          if(i.color)
           this.color=i.color;
          if(i.guige)
          this.guiGe=i.guige;
          if(i.chima)
          this.chiMa=i.chima;
     },
     changeValue(msg){
         this.value=msg;
     //  console.log(this.value)
     },
     closeScreen(){
         //改变transform
         this.$emit("isHide");

     },
     addCart(){
         //添加购物车
        let cartList=this.$localStorage.get("cartList")||[];
        let len=cartList.length;
        let newp=this.property;
        newp["ischeck"]=1;//默认添加购物车后商品是选中的
        if(len){
            for(let i=0;i<len;i++){
                if(newp.pid==cartList[i].pid){
                    cartList[i].value=cartList[i].value*1+newp.value*1;
                    newp=null;
                    break;
                }
            }
            if(newp)
             cartList.push(newp);
        }else{
            cartList.push(newp);
        }
        this.$localStorage.set("cartList",cartList);
        this.$nextTick(()=>{
            this.$emit("isHide");
        })
     }
  },
  updated() {
    this.showData();
  //  console.log(this.property)
  },
  components:{
      Addbutton
  }
};
</script>
<style scoped>
.infoBox {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  position: fixed;
  z-index: 502;
  top:0;
  left: 0;
  transition: all .4s;

}
.product-div {
  height: 11.7rem;
}
.product-list-img {
  width: 11.7rem;
  display: block;
}
.product-text {
  display: flex;
  justify-content: space-between;
  margin-left: 0.8rem;
  flex: 1;
  overflow: hidden;
  line-height: 1.5rem;
  flex-direction: column;
}
.box-flex {
  width: 85%;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 400;
  font-size: 12px;
}
.close {
  color: #dd130f;
  font-size: 20px;
  text-align: center;
  flex: 1;
  line-height: 3rem;
}
.p-price {
  margin: 0.5rem 0;
  font-size: 20px;
  vertical-align: middle;
  color: #ec5151;
}

.attributss {
  padding-top: 20px;
  margin-left: 0.8rem;
}
.attributss >div{
    margin-bottom: 1rem;
}
.counts{
    margin-left: 0.8rem;
}
.s-name h6 {
  font-size: 14px;
  line-height: 24px;
  color: #555;
  font-weight: 400;
}
.test {
  font-size: 12px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  display: inline-block;
  padding: 0.2rem 0.6rem;
  margin-left: 0.5rem;
  border-radius: 5px;
}
.checked {
  color: #ec5151;
  border-color: #ec5151;
  background-color: #fff;
}
.addCart{
    color: #fff;
    display:block;
    border-radius: 5px;
    height: 5rem;
    line-height: 5rem;
    font-size: 16px;
    text-align:center;
    background: -webkit-gradient(linear, right top, left top, color-stop(0, #fa4dbe), to(#fbaa58));
    background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
}
.ect-button-more{
    margin: 5rem 1rem 0;
}
.img-title{
    padding-left: 1rem;
}
.shade{
  background-color: #000;
  opacity: .4;
  width: 100%;
  max-width: 750px;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  z-index:501;
}
.alertInfo{
    position: absolute;
    left:0;
    width:100%;
    bottom: 0;
    z-index:502;
    padding-top: 1rem;
    transition: all 0.4s;
    transform: translateY(0);
}
.shadeHide{
   display:none;
}
.alertHide{
    transform: translateY(100%);
}
.infoHide{
    z-index: 0;
}
</style>
