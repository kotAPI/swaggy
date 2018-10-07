import Router from "vue-router"
import Vue from "vue"

function load(component) {
  return () => import(`@/components/${component}.vue`)
}

Vue.use(Router)
let router = new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: load("home/Home"),
     
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: load("checkout/Checkout"),
     
    },
    {
      path: "/order-placed",
      name: "ThankYou",
      component: load("thankyou/ThankYou"),
     
    },
   
  ]
})


export default router
