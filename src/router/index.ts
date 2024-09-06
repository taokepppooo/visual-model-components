import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/output-encryption-decryption'
  },
  {
    path: '/output-encryption-decryption',
    component: () => import('@/instance/output-encryption-decryption/index.tsx')
  },
  {
    path: '/output-transform',
    component: () => import('@/instance/output-transform/index.tsx')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {  
  console.log(`Navigating to: ${to.path}`);  
  console.log(`Navigating from: ${from.path}`);  
  next();  
});  