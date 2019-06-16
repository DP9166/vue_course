import Home from '@/views/Home.vue'

export default [
    {
      path: '/',
      alias: 'home_page',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( '@/views/About.vue')
    },
    {
      path: '/argu/:name',
      name: 'argu',
      component: () => import( '@/views/Argu.vue')
    },
    {
      path: '/parent',
      component: () => import('@/views/Parent.vue'),
      children: [
        {
          path: 'child',
          component: () => import('@/views/Child.vue')
        }
      ]
    },
    {
      path: '/name_view',
      components: {
        default: () => import('@/views/Child.vue'),
        email: () => import('@/views/Email.vue'),
        tel: () => import('@/views/Tel.vue')
      }
    },
    {
      path: 'main',
      redirect: to => '/'
    }
  ]
