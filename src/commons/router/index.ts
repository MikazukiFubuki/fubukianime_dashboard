import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
                     {
               path: '/',
               redirect: '/page1',
              },
             {
                path: '/page1',
                name: '主展示',
                component: () => import('@/page1/index.vue')
              },
               {
                path: '/page2',
                name: '追番季',
                component: () => import('@/page2/index.vue')
               },
               {
                path: '/page3',
                name: '追番时期',
                component: () => import('@/page3/index.vue')
               }
    ]
})

export default router