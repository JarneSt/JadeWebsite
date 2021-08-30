import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Overmij from "../views/Overmij";
import Aanbod from "../views/Aanbod";
import Trajecten from "../views/Trajecten";
import TarievenInfo from "../views/TarievenInfo";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overmij',
    name: 'overmij',
    component: Overmij
  },
  {
    path: '/aanbod',
    name: 'aanbod',
    component: Aanbod
  },
  {
    path: '/trajecten',
    name: 'trajecten',
    component: Trajecten
  },
  {
    path: '/tarieven',
    name: 'tarieven',
    component: TarievenInfo
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
