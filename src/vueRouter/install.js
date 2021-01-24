import RouterView from "./component/view";
import RouterLink from "./component/link";
let _Vue;
export default function install(Vue) {
    _Vue = Vue;
    _Vue.mixin({
        beforeCreate() {
            if(this.$options.router){
                this._routerRoot = this;
                this._router = this.$options.router;
            }else{
                this._routerRoot = this.$parent && this.$parent._routerRoot;
            }
            //初始化
            this._router.init(this);

            _Vue.util.defineReactive(this,'_route',this._router.history.current);
        }
    })
    Object.defineProperty(Vue.prototype,'$router',{
        get(){
            return this._routerRoot._router
        }
    });
    Object.defineProperty(Vue.prototype,'$route',{
        get(){
            return this._routerRoot._route
        }
    })
    Vue.component("RouterView",RouterView);
    Vue.component("RouterLink",RouterLink);
}