import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Author from '../views/Author.vue'
import Book from '../views/Book.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list/book',
    name: 'Book',
    component: Book
  },
  {
    path : '/list',
    name: List,
    component: List
  },
  {
    path: '/list/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/list/author',
    name: 'Author',
    component: Author
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
