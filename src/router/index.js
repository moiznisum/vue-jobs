import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Jobs from "@/views/Jobs/Jobs.vue";
import Job from "@/views/Job/Job.vue";
import NotFound from "@/views/NotFound/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
            path: '/job/:id',
            name: 'job',
            component: Job
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router;