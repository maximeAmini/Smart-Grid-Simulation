import { createRouter, createWebHistory } from 'vue-router'
import Tabbord from '../views/Tabbord.vue'
import Simulateur from '../views/Simulateur.vue'
import Gestion from '../views/Gestion.vue'
import Client from '../views/Client.vue'
import Data from '../views/Data.vue'

const routes = [
    {
        path: '/',
        name: 'Tableau de bord',
        component: Tabbord
    },
    {
        path: '/simulateur',
        name: 'Simulateur',
        component: Simulateur
    },
    {
        path: '/gestion',
        name: 'Gestion',
        component: Gestion
    },
    {
        path: '/gestion/:id',
        name: 'Client',
        component: Client
    },
    {
        path: '/capteur/:id',
        name: 'Capteur',
        component: Data
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
