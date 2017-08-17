import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test/test'
import home from '@/components/home/home'
import bloghome from '@/components/home/bloghome'
import about from '@/components/home/about'
import contact from '@/components/contact/contact'
import blog from '@/components/home/blog'
import blogtype from '@/components/home/blogtype'
import login from '@/components/admin/login'
import addblog from '@/components/admin/addblog'
import blogedit from '@/components/admin/blogedit'
import operate from '@/components/admin/operate'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      component: test
    },
    {
      path: '/bhome',
      component: home
    },
     {
      path: '/bloghome',
      component: bloghome
    },
      {
      path: '/About',
      component: about
    },
    {
      path: '/Contact',
      component: contact
  },
  {
      path: '/Blog',
      component: blog
  },
  {
      path: '/Blogtype',
      name: 'blogtype',
      component: blogtype
  },
  {
      path: '/login',
      component: login
  },
  {
      path: '/addBlog',
      component: addblog
  },
   {
      path: '/blogEdit',
      component: blogedit
  },
   {
      path: '/operate',
      component: operate
  }
  ]
})
