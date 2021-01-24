import History from "./history";
function getHash() {
    return window.location.hash.slice(1);
}
function ensureSlash() {
    if(window.location.hash){
        return ;
    }
    window.location.hash = '/'
}
export default class HashHistory extends History{
    constructor(router) {
        super(router);
        ensureSlash()
    }
    getCurrentLocation(){
        return window.location.hash.slice(1)
    }
    setupListeners(){
        window.addEventListener('load',()=>{

        })
        window.addEventListener('haschange',()=>{
            this.transitionTo(getHash())
        })
    }
}