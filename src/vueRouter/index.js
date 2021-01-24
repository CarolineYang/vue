import install from './install'
import {createMatcher} from "vue-router/src/create-matcher";
import {HashHistory} from "vue-router/src/history/hash";
export default class VueRouter {
    constructor(options) {
        //扁平化路由 得到一个pathList和一个PathMap 返回个对象有一个属性 match和一个方法addRoutes
        this.matcher = createMatcher(options.route || []);
        //创建路由系统 根据模式来创建不同的路由对象
        this.mode = options.mode || 'hash';
        this.history = new HashHistory(this);
    }
    init(app){//app根实例
    //    根据当前路径跳转到指定的路由
        const history = this.history;
        const setupHashListener = ()=>{
            history.setupListeners()
        };
        history.transitionTo(history.getCurrentLocation(),
            setupHashListener//后续要监听路由变化的
        )
        history.listen((route)=>{
            app._route = route;  //视图刷新
        })

    }
    match(location){
        return this.matcher.match(location)
    }
    push(){

    }
    replace(){

    }
}
VueRouter.install = install;