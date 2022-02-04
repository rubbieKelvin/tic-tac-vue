import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    routes: [
        // {component: <404>, path: '/:catchAll(.*)'}
    ],
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition){
        return {top: 0, behavior: 'smooth'}
    }
})

