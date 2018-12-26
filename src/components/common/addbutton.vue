<template>
  <div class="changeValue">
    <i ref="sub" @click="changeValue(-1)" class="sub">-</i>
    <input type="text" ref="input" v-model="val" @change="changeValue(0)">
    <i ref="add" @click="changeValue(1)" class="add">+</i>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ["val"],
  methods:{
      changeValue(n){
        let val=this.val;
        if(n==-1&&val>1){
            val--;
        }
        if(n==1&&val<999){
            val++;
        }
        if(val==1&&n==0)
            val=1;
        if(val>=999&&n==0){
            val=999;
        }
        this.$emit("ling",val);
      }
  },
  
};
</script>
<style scoped>
.changeValue {
  text-align: center;
}
.changeValue .sub,
.changeValue .add {
  width: 25px;
  height: 25px;
  display: inline-block;
  line-height: 25px;
  font-size: 14px;
  color: #fff;
  background: -webkit-linear-gradient(left, #fa4dbe 0, #fbaa58 100%);
  background: -o-linear-gradient(left, #fa4dbe 0, #fbaa58 100%);
  background: -ms-linear-gradient(left, #fa4dbe 0, #fbaa58 100%);
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  font-size: 20px;
  vertical-align: middle;
  border-radius: 5px;
}
.changeValue input {
  vertical-align: middle;
  border: 1px solid #e5e5e5;
  height: 25px;
  width: 50px;
  text-align: center;
  margin: 0 5px;
}
</style>
