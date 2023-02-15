import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import ContactIndex from '../pages/contact-index.vue'
import DeshboardIndex from '../pages/deshboard-index.vue'
import ContactEdit from '../pages/contact-edit.vue'



const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/contact',
            component: ContactIndex,
        },
        {
            path: '/contact/:_id',
            component: ContactIndex,
        },
        {
            path: '/deshboard',
            component: DeshboardIndex,
        },
        {
            path: '/contact/edit/:_id?',
            component: ContactEdit,
        },

    ],
}
const router = createRouter(routerOptions)

export default router
