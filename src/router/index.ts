import { createMemoryHistory, createRouter } from 'vue-router'

import OutputEncryptionDecryption from '@/instance/output-encryption-decryption/index.vue';

const routes = [
  { path: '/', component: OutputEncryptionDecryption },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})