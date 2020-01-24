import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const createRouter = function (pre,path,keepAlive,children) {
  let routerItem = {
    path:`${pre}${path}`,
    name:path,
    component:() => import(`../views/${path}`)
  };
  let meta = keepAlive?{keepAlive}:null;
  meta ? routerItem.meta = meta : null;
  children ? routerItem.children = children : null;
  return routerItem;
};
export default new Router({
  routes:[
    createRouter('/','login'),
    createRouter('/','tabPage',true,[
      createRouter('/tabPage/','home'),
      createRouter('/tabPage/','mine'),
    ])
  ]
})
