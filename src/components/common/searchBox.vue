
<template>
  <div class="searchBox flex" ref="searchBox">
    <GoBack></GoBack>
    <Search></Search>
  </div>
</template>
<script>
import GoBack from "@/components/common/goBack";
import Search from "./search";
export default {
  data() {
    return {};
  },
  props: [],
  
  components: {
    GoBack,
    Search
  }
};
</script>
<style scoped>
.searchBox {
  position: relative;
  z-index: 100;
}

.searchBox .app-search {
  padding-left: 2rem;
}
</style>
