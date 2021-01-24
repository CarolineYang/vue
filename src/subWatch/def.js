export default function def(target,key,value,enumerable) {
    Object.defineProperty(target,key,{
        writable:true,
        configurable:true,
        enumerable,
        value
    })
}