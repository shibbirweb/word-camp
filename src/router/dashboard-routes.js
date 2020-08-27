export const dashboardChildrenRoute = [
    {
        path: 'summary',
        name: 'Dashboard-Summary',
        component: () => import('../views/backend/dashboard/Summary.vue')
    },
    {
        path: 'words',
        name: 'Dashboard-Words',
        component: () => import('../views/backend/dashboard/Words.vue')
    }
]
