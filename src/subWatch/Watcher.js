import Dep from "./Dep";
var uuid = 0;
function parsePath(str) {
    let sgments = str.split('.');
    return function (obj) {
        for(let i=0;i<sgments.length;i++){
            obj = obj[sgments[i]]
        }
        return obj;
    }
}
export default class Watcher {
    constructor(target,expression,callback) {
        this.id = uuid++;
        this.target = target;
        this.callback = callback;
        this.getter = parsePath(expression);
        this.value = this.get();
    }
    get(){
        Dep.target = this;
        let target = this.target;
        let value;
        try{
            value =  this.getter(target);
        }finally {
            Dep.target = null;
        }
        return value;
    }
    update(){
        this.run()
    }
    run(){
        this.getAndInvolved()
    }
    getAndInvolved(cb){
        let value = this.get();
        if(value !== this.value || typeof value == "object"){
            const oldValue = this.value;
            this.value = value;
            cb.call(this.target,this.value,oldValue)
        }
    }

}