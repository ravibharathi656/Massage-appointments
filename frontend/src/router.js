import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import store from './store'
import { userResource } from '@/data/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    name:'Evenlists',
    path:'/EventList/ename',
    component: () => import('@/pages/EventSites.vue'),
    props: true
  },
  {
    name:'EventApplying',
    path:'/EventList/Eventname',
    component: () => import('@/pages/EventApplying.vue'),
    props: true
  },
  {
    name:'EventCreating',
    path:'/EventList/Eventname1',
    component: () => import('@/pages/EventCreate.vue'),
    props: true
  },
  {
    name:'EventListing',
    path:'/EventList/EventList',
    component: () => import('@/pages/EventList.vue'),
    props: true
  },
  {
    name:'EventShedule',
    path:'/EventList/EventShedule',
    component: () => import('@/pages/EventShedule.vue'),
    props: true
  },
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = session.isLoggedIn
  try {
    await userResource.promise
  } catch (error) {
    isLoggedIn = false
  }
  if (to.name === 'EventApplying') {
    store.dispatch('setEnameValue', to.params.Eventname)
  }

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
