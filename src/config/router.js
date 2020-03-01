import Router from 'vue-router'
import routes from './routes'
// const router=new Router({
//     routes
// })

export default ()=>{
    return new Router({
        routes,
        mode:'history',
        fallback:true,
        activeClass:'hh',
        exactActiveClass:'aa',
        scrollBehavior(to,from,savedPosition){
            if(savedPosition){
                return savedPosition
            }else{
                return {x:0,y:0}
            }
        },
        // parseQuery(){
        //
        // },
        // stringifyQuery(){
        //
        // }
    })
}