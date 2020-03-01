import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/login"
export default [
    {
        path:'/',
        component:HelloWorld,
        name:'hello',
        redirect:'/hello'
    },
    {
        path:'/hello',
        component:HelloWorld,
        name:'hello'

    },
    {
        path:'/login',
        component:Login,
        name:'login',
        props:{
            id:{name:'hhhh',age:20}
        },
        beforeEnter(to,from,next){
            // console.log(' beforeEnter',to,from);
            next()
        }
    }
]