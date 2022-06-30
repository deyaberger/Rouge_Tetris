const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/MenuPage.vue') },
      { path: '/:room[:player]', component: () => import('src/pages/GamePage.vue') },
      { path: '/error', component: () => import('src/pages/ErrorServer.vue') },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
