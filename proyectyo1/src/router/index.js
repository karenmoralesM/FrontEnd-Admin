import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EjemploView from '../views/EjemploView.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   /*Ejemplo */
  {
    path: '/ejemplo',
    name: 'ejemplo',
    component: EjemploView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },



  /*Administradores */
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/dashboard-admin/InicioAdminView.vue')
  },
  {
    path: '/admin/aprendices',
    name: 'aprendices',
    component: () => import('../views/dashboard-admin/AprendicesAdminView.vue')
    
  },
  {
    path: '/admin/administradores',
    name: 'administradores',
    component: () => import('../views/dashboard-admin/AdministradoresAdminView.vue')
  },
  {
    path: '/admin/artesanias',
    name: 'artesanias',
    component: () => import('../views/dashboard-admin/ArtesaniasAdminView.vue')
  },
  {
    path: '/admin/psicologos',
    name: 'psicologos',
    component: () => import('../views/dashboard-admin/PsicologosAdminView.vue')
  },
  {
    path: '/admin/registroPsicologo',
    name: 'registroPsicologs',
    component: () => import('../views/dashboard-admin/RegistropsicologoView.vue')
  },
  {
    path: '/admin/perfil',
    name: 'perfil',
    component: () => import('@/views/dashboard-admin/PerfilAdminView.vue')

  }
]








const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
