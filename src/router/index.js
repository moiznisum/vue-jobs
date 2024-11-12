import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Jobs from "@/views/Jobs/Jobs.vue";
import Job from "@/views/Job/Job.vue";
import AddJobs from "@/views/AddJob/AddJob.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
import EditJob from "@/views/EditJob/EditJob.vue";

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
            path: '/jobs/add',
            name: 'add-jobs',
            component: AddJobs
        },
        {
            path: '/job/edit/:id',
            name: 'edit-job',
            component: EditJob,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router;