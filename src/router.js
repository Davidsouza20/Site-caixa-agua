import Vue from 'vue'
import Router from 'vue-router'
import Cadastre from './components/Cadastre'
import Login from './components/Login'
import Home from './components/Home'
import Limpeza from './components/Limpeza'
import Dedetizacao from './components/Dedetizacao'
import Sofa from './components/Sofa'
import AuthGuard from './authGuard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: AuthGuard
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/cadastro',
      name: 'cadastre',
      component: Cadastre
    },
    
    {
      path: '/limpeza-caixa-agua',
      name: 'limpeza-caixa-agua',
      component: Limpeza,
      beforeEnter: AuthGuard
    },
    
    {
      path: '/limpeza-sofa',
      name: 'limpeza-sofa',
      component: Sofa,
      beforeEnter: AuthGuard
    },
    
    {
      path: '/dedetizacao',
      name: 'dedetizacao',
      component: Dedetizacao,
      beforeEnter: AuthGuard
    },
    
  ]
})
