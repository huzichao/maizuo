import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Films from '@/views/Films/Index'
// import ComingSoon from '@/views/Films/ComingSoon'
// import NowPlaying from '@/views/Films/NowPlaying'
// import Detail from '@/views/Films/Detail'
// import Center from '@/views/Center/Index'
// import Cinemas from '@/views/Cinemas/Index'

//导入经过模块化的路由
import filmRouter from './routes/films'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'

import City from '@/views/City/Index'

const routes = [
    {
        path: '/',
        redirect: "/films/nowPlaying"
    },
    {
        path: '/city',
        component: City
    },
    ...filmRouter,
    ...cinemaRouter,
    ...centerRouter
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
