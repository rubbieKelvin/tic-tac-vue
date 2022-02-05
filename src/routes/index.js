import { createRouter, createWebHistory } from "vue-router";
import EntryPage from '../pages/Entry.vue'
import GamePage from '../pages/Game.vue'

export const router = createRouter({
    routes: [
        {component: EntryPage, path: '/'},
        {component: GamePage, path: '/game'},
        // {component: <404>, path: '/:catchAll(.*)'}
    ],
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition){
        return {top: 0, behavior: 'smooth'}
    }
})

