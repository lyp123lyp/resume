import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index';
import Search from "@/components/searchProducts";
import  Products from "@/components/products";
import Classify from "@/components/classify";
import Detail from "@/components/detail";
import Cart from "@/components/cart";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/search',
      name:"search",
      component:Search
    },
    {path:"/products/:keywords",
     name:"products",
     component:Products
    },
    {
      path:"/classify",
      name:"classify",
      component:Classify
    },
    {
      path:"/detail/:pid",
      name:"detail",
      component:Detail
    },
    {
      path:"/cart",
      name:"cart",
      component:Cart
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
