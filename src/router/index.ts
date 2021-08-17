import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home/ArticleClass/index.vue'),
      }, {
        path: 'ArticleDetails',
        component: () => import('@/views/Home/ArticleDetails/index.vue'),
      }, {
        path: 'Set',
        component: () => import('@/views/Home/Set/index.vue')
      }
    ],
  }, {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/User/Set/index.vue')
      }, {
        path: 'uploadArticle',
        component: () => import('@/views/User/uploadArticle/index.vue')
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});
export default router;
