import Vue from 'vue';
import Router from 'vue-router';
import landingPage from './components/landingPage';
import Dashboard from './components/Dashboard'
Vue.use(Router)

export default new Router({
    routes:[
      {
        path:'/', 
        name: 'landingPage',
        component: landingPage
      },
      {
        path:'/dashboard',
        name: 'dashboard',
        component: Dashboard
      }
    ],
    mode:'history'
  })