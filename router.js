const router = new Router({
    routes: [
       {
         path: '/',
         component: 'pages/index.vue'
       },
       {
         path: '/complete',
         component: 'pages/complete.vue'
       },
       {
        path: '/products',
        component: 'pages/products.vue'
      }
     ]
   })