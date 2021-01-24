import Observer from "./Observer";

export default function observe(value) {
    if(typeof value != 'object'){return;}
    var ob;
    if(value.__ob__){
        ob = value.__ob__;
    }else{
        ob = new Observer(value);
    }
    return ob;
}