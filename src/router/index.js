import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../config/firebase'
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
        component: () => import('../views/SignIn.vue'),
        // a meta field
        meta: { requiresGuest: true }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/backend/Dashboard.vue'),
        redirect: { name: 'Dashboard-Summary' },
        children: dashboardChildrenRoute,
        // a meta field
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes
})

router.beforeEach(async (to, from, next) => {
    const currentUser = await auth.currentUser
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!currentUser) {
            console.log('matched')
            next({
                name: 'SignIn',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (currentUser) {
            next({
                name: 'Dashboard'
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router
