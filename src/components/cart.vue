<template>
  <div class="product-list-small">
     <ul>
        <li v-for="(item,index) in cartList" :key="index"> 
             <CartItem :item="item"></CartItem>
        </li>
     </ul>
   
  </div>
</template>
<script>
import CartItem from "./common/cartItem";
export default {
  data() {
    return {
      cartList:[]
    };
  },
  created(){
    this.cartList=this.$localStorage.get("cartList");
  },

  props:[],
  components:{
      CartItem
  }
};
</script>
<style scoped>
.product-list-small {
    padding: 0 1.3rem;
    overflow:hidden;
}
.product-list-small li {
    box-sizing: border-box;
    border-bottom: 1px solid #F6F6F9;
    width: 100%;
    padding-bottom: 1px;
    text-align:left;
    margin-bottom: .5rem;
    background: #fff;
}

</style>
