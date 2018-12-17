import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ '@/views/Dashboard'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/Projects'),
        },
        {
            path: '/team',
            name: 'team',
            component: () => import('@/views/Team'),
        },
        {
            path: '/navbar',
            name: 'navbar',
            component: () => import('@/components/Navbar'),
        },
    ],
})
