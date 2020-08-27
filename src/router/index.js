import Vue from 'vue'
import VueRouter from 'vue-router'
import { dashboardChildrenRoute } from './dashboard-routes'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import('../views/SignIn.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/backend/Dashboard.vue'),
        redirect: { name: 'Dashboard-Summary' },
        children: dashboardChildrenRoute
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes
})

export default router
