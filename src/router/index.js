import { createRouter, createWebHistory } from 'vue-router'
import Tabbord from '../views/Tabbord.vue'
import Simulateur from '../views/Simulateur.vue'
import Suivie from '../views/Suivie.vue'
import Test from '../views/Test.vue'

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
        path: '/Afficher',
        name: 'Suivie',
        component: Suivie
    },
    {
        path: '/test/:id_client',
        name: 'test',
        component: Test
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
