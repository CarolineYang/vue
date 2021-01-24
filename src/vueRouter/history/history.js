import createRoute from '../create-route'
export default class History {
    constructor(router) {
        this.router = router;
        this.current = createRoute(null,{
            path:'/'
        })
    }
    //比较重要的东西
    transitionTo(location,onComplete){
        let route = this.router.match(location);
        if(this.current.path == location && this.current.matched.length == route.matched.length){
            return;//相同路径不做操作
        }
        this.updateRoute(route);
        onComplete && onComplete();
    }
    updateRoute(route){
        this.current = route;
        this.cb && this.cb(route);
    }
    listen(cb){
        this.cb = cb;
    }

}