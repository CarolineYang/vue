import createRouteMap from './create-route-map'
import createRoute from "./create-route";
export default function createMatcher(routes){

    // 创建路由匹配表 [about,about/a] {'about':{path:'',component:'xx'},'about/a':{path:'',component:'xx'}}
    let {pathList,pathMap} = createRouteMap(routes);
    // console.log(pathList,pathMap);
    //动态添加
    function addRoutes(routes) {
        //添加新的配置
        createRouteMap(routes,pathList,pathMap);
    }
    //匹配
    function match(location) {
        if(pathMap[location]){
            return createRoute(pathMap[location],{
                path:location
            })
        }
        return createRoute(null,{
            path:location
        })
    }
    return{
        addRoutes,
        match
    }
}