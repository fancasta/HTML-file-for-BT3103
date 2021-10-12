import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/views/Admin.vue'
import Manager from '@/views/Manager.vue'
import Member from '@/views/Member.vue'
const routes = [
    {
        path: '/',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/manager',
        name: 'Manager',
        component: Manager
    },
    {
        path: '/member',
        name: 'Member',
        component: Member
    }
]
const router = createRouter({
history: createWebHistory(),
routes
})
export default router