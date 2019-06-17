import Home from '@/views/Home.vue'

export default [
    {
      path: '/',
      alias: 'home_page',
      props: route => ({
        food: route.query.food
      }),
      component: Home,
      beforeEnter: (to, from, next) => {
        // if (from.name === 'login') alert('这是从登录页来的...')
        // else alert('不是..')
        next()
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      props: {
        food: 'apple'
      },
      meta: {
        title: '关于'
      },
      component: () => import( '@/views/About.vue')
    },
    {
      path: '/argu/:name',
      name: 'argu',
      props: true,
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
    },
    {
      path: '*',
      component: () => import('@/views/error_404.vue')
    }
  ]
