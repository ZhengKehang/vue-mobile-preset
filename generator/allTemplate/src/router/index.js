import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const createRouter = function (path,title,{keepAlive=false,notHeader=false,isTab}) {
    let meta = {
        title
    };
    notHeader&&(meta.notHeader = notHeader);
    keepAlive&&(meta.keepAlive = keepAlive);
    isTab&&(meta.tabName = path);
    return {
        path:`/${path}`,
        name:path,
        component:() => import(`../views/${path}`),
        meta
    }
};
export default new Router({
    routes:[
        createRouter('login','登录',{notHeader:true}),
        createRouter('home','首页',{isTab:true}),
        createRouter('mine','我的',{isTab:true})
    ]
})