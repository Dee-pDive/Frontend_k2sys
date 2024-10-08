import { createWebHistory, createRouter } from 'vue-router'
import vueHome from '@/views/vueHome.vue'
import vueAbout from '@/views/vueAbout.vue'

const routes = [
    {
        path: '/',
        component: vueHome
    },
    {
        path: '/about',
        component: vueAbout
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

