import Dep from "./Dep";
import observe from "./observe";

export default function defineReactive(target,key,value) {
    console.log('我是defineReactive',target,key,value);
    let dep = new Dep();
    if(arguments.length == 2){
        value = target[key];
    }
    let childOb = observe(value);

    console.log("childOb ",childOb)
    Object.defineProperty(target,key,{
        configurable:true,
        enumerable:true,
        get(){
            console.log('你试图fangwn',target,'属性',key)
            if(Dep.target){
                dep.depend();
                if(childOb){
                    childOb.dep.depend();
                }
            }
            return value;
        },
        set(newValue){
            console.log('你试图修改',target,'de',key)
            if(newValue == value){
                return;
            }

            childOb = observe(newValue);
            console.log("childObff ",childOb)
            value = newValue;
            dep.notify();
        }
    })
}