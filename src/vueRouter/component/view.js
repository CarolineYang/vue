//函数式组件 js结尾 没有this 没有状态
export default {
    functional:true,
    render(h,{parent,data}){
        let route = parent.$route;
        let matched = route.matched;//[about about/a]
        data.routerView = true;
        let depth = 0;
        while(parent){
            if(parent.$vnode && parent.$vnode.data.routerView){
                depth++;
            }
            parent = parent.$parent;
        }
        let record = matched[depth];
        if(!record){
            return h();
        }

        let component = record.component;
        return h(component,data)
    }
}