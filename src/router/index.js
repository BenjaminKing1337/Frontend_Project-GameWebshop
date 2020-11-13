import Vue from 'vue'
import VueRouter from 'vue-router'
import Frontpage from '../views/Frontpage.vue'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Game from '../views/Game.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import SignUp from '../components/User/SignUp.vue'
import Login from '../components/User/Login.vue'
import AuthGuard from './auth-guard'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Frontpage',
    component: Frontpage,
    meta: { hide: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/games/:id',
    name: 'Game',
    props: true,
    component: Game
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: AuthGuard
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
