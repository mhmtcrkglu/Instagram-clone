import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import ProfilePost from '../views/profile/post'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */'../views/profile/index'),
    children: [
      {
        path: 'post',
        name: 'Post',
        component: ProfilePost
      },
      {
        path: 'igtv',
        name: 'IGTV',
        component: () =>
            import(/* webpackChunkName: "profile" */'../views/profile/igtv'),
      },
      {
        path: 'saved',
        name: 'Saved',
        component: () =>
            import(/* webpackChunkName: "profile" */'../views/profile/save'),
      },
      {
        path: 'tagged',
        name: 'Tagged',
        component: () =>
            import(/* webpackChunkName: "profile" */'../views/profile/tag'),
      }
    ]
   },
  {
    path: '/direct',
    name: 'Direct',
    component: () =>
        import(/* webpackChunkName: "direct" */'../views/direct/index')
  },  {
    path: '/explore',
    name: 'Explore',
    component: () =>
        import(/* webpackChunkName: "explore" */'../views/explore/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
