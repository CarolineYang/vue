import Dep from "./Dep";
import defineReactive from "./defineReactive";
import observe from "./observe";
import arrayMethods from "./arrayMethods";
import def from "./def";

export default class Observer {
    constructor(value) {
        console.log('我是observer');
        this.dep = new Dep();
        def(value,'__ob__',this,false);
        if(Array.isArray(value)){
            Object.setPrototypeOf(value,arrayMethods);
            this.observeArray(value);
        }else{
            this.walk(value);
        }
    }
    walk(value){
        for(let key in value){
            defineReactive(value,key);
        }
    }
    observeArray(value){
        for(let i=0;i<value.length;i++){
            observe(value[i]);
        }
    }


}