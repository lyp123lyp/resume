<template>
  <div>
    <span :class="status==index?'active':''">{{item}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  props:["item","status","index"]
};
</script>
<style scoped>


</style>