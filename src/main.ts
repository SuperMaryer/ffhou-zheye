import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './components/ColumnDetail.vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

// store
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    }
  }
})
console.log('store.state.count', store.state.count)
store.commit('add')
console.log('store.state.count', store.state.count)

// router
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component: Column
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
