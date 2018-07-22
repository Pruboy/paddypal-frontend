import Vue from 'vue'
import Router from 'vue-router'
import VueValidator from 'vue-form-validator'
Vue.use(VueValidator)
import Home from '@/components/home'
import Signin from '@/signin'
import Create from '@/components/createnew'
import Profile from '@/components/profile'
import Farmers from '@/components/farmers'
import Farmdetails from '@/components/farmdetails'
import Map from '@/components/map'
<<<<<<< HEAD
import start from '@/components/startpage/start'
=======
>>>>>>> 633b0570581e73a1d70cfdc496f3ac6826698cc3
import Appdownload from '@/components/appdownload'
Vue.use(Router)
export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/Home',
=======
      path: '/',
>>>>>>> 633b0570581e73a1d70cfdc496f3ac6826698cc3
      name: '/Home',
      component: Home
    },

    {
      path: '/map',
      name: '/Map',
      component: Map
    },
<<<<<<< HEAD
    {
      path: '/',
      name: '/start',
      component: start
    },
=======
>>>>>>> 633b0570581e73a1d70cfdc496f3ac6826698cc3

    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/createnew',
      name: 'createnew',
      component: Create
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/farmers',
      name: 'farmers',
      component: Farmers
    },
    {
      path: '/farmdetails',
      name: 'farmdetails',
      component: Farmdetails
    },
    {
      path: '/appdownload',
      name: 'Appdownload',
      component: Appdownload
    },
  ],
  mode:'history'
});
