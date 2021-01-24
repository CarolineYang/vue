import def from "./def";

const arrayMethods = Object.create(Array.prototype);
const methods = ['pop','push','unshift','shift','sort','reverse','splice'];
methods.forEach((method)=>{
    const origin = Array.prototype[method];
    def(arrayMethods,'prototype',function () {
        let res = origin.apply(this,arguments);
        const ob = this.__ob__;
        let inserted = [];
        switch (method) {
            case "unshift":
            case "push":
                inserted = arguments;
                break;
            case "splice":
                inserted = arguments.slice(2);
                break;
        }
        if(inserted){
            ob.observeArray(inserted);
        }
        ob.dep.notify();
        return res;
    },false)

})

export default arrayMethods;