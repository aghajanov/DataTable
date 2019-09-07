import Vue from "vue";
import User from "./views/User.vue";
import DataTable from './components/DataTable.vue';
import VueRouter from "vue-router";

Vue.use(Router);

export default new VueRouter({
  routes:[
  {
    path: "/",
    name: "home",
    component: DataTable,
  },
    {
      path: "/user",
      name: "new",
      component: User,
    },]
   
});
