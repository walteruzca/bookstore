import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/componets/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
        path:'/',
        name:'home',
        component: Home,
        meta:{Auth:false,title:'Inicio'}
        }
        
    ]
})