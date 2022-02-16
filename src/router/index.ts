import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
// import Education from '../views/Education.vue'
// import WorkExperiences from '../views/WorkExperiences.vue'
import Projects from '../../views/Projects.vue'
// import Contact from '../views/AboutMe.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/education',
  //   name: 'Education',
  //   component: Education
  // },
  // {
  //   path: '/workexperiences',
  //   name: 'WorkExperiences',
  //   component: WorkExperiences
  // },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
  // {
  //   path: '/aboutme',
  //   name: 'Contact',
  //   component: Contact
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
