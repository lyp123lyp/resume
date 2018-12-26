<template>
  <div class="product-list-small ">
    <mt-header fixed title="购物车"></mt-header>
     <ul>
        <li v-for="(item,index) in cartList" :key="index" class="bgWhite"> 
             <CartItem :item="item" :index="index"  @lingCart="lingCart" data-index="index"></CartItem>
        </li>
     </ul>
     <!-- 计算商品总价格 -->
    <section class="totalBox flex bgWhite">
      <div class="checkAll" @click="checkStatusAll">
        <label :class="isCheckAll==1?'active':''"></label>
        <span v-if="isCheckAll==0">全选</span>
        <span v-if="isCheckAll==1">取消全选</span>
        <span v-if="isCheckAll==-1">未添加商品</span>
      </div>
      <div class="total">
        <div>总计：{{total.toFixed(2)}}</div>
      </div>
      <div class="accounts">
        <span>马上结算</span>
      </div>
    </section>
  </div>
</template>
<script>
import CartItem from "./common/cartItem";
export default {
  data() {
    return {
      cartList:[],
      total:0
    };
  },
  created(){
    this.cartList=this.$localStorage.get("cartList");
  },
  computed:{
      isCheckAll(){
        let arr=this.cartList||[];
        let total=0;
        let len=arr.length;
        let count=0;
        if(!len){
          this.total=total;
          return -1;
        }
        for(let i=0;i<len;i++){
          if(arr[i].ischeck==1){
            count++;
            total+=arr[i].value*arr[i].price;
          }
        }
        this.total=total;
        if(count==len)
        return 1
        else
        return 0
      }
  },
  updated() {
     // console.log(this.total)
  },
  methods:{
     lingCart(msg){
       let {index,val,ischeck,remove}=msg;
       var cartList=this.cartList;
       if(val){
         cartList[index].value=val;
       } 
       if(ischeck!==undefined){
         cartList[index].ischeck=ischeck;
       }
       if(remove!==undefined){
         cartList.splice(remove,1);
       }
        this.$localStorage.set("cartList",cartList);
     },
     checkStatusAll(){
       if(this.isCheckAll==-1){
         return;
       }else{
         let arr=this.cartList;
         let len=arr.length,flag=false;
         if(this.isCheckAll==0){
            flag=true;
         }
         if(this.isCheckAll==1){
           flag=false;
         }
         for(let i=0;i<len;i++){
           arr[i].ischeck=flag;
         }
       }

     }
  },
  props:[],
  components:{
      CartItem
  }
};
</script>
<style scoped>

.product-list-small ul{
   
    overflow:hidden;
}
.product-list-small li {
    padding: 0 1.2rem;
    box-sizing: border-box;
    border-bottom: 1px solid #F6F6F9;
    width: 100%;
    padding-bottom: 1px;
    text-align:left;
    margin-bottom: .5rem;
    background: #fff;
}
.checkAll{
  position:relative;
}
label {
  height: 2rem;
  font-size: 1.6rem;
  position: absolute;
  width: 2rem;
  height:2rem;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid #ec5151;
  border-radius: 50%;
  box-sizing: border-box;
}
 label.active{
  color: #fff;
  text-align: center;
  background: #ec5151;
  background-size: 70%;
}
label+span{
  display:inline-block;
  margin-left: 2.5rem;
 
}
.totalBox{
  position:fixed;
  left:0;
  bottom: 0;
  width: 100%;
  padding:   1.2rem;
   font-size: 14px;
   text-align: left;
   box-sizing:border-box;
   line-height: 2.2rem;
}
.totalBox>div{
 flex: 1;
   line-height: 4rem;
} 
.accounts{
  padding-left: 1rem;
  box-sizing:border-box;
}
.accounts span{
  display:block;
  height: 4rem;

  background-color:#ec5151;
  text-align: center;
  color:#fff;
  border-radius: 5px;
}
</style>
