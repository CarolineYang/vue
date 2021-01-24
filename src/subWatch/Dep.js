var uuid = 0;
export default class Dep {
    constructor() {
        this.subs = [];
        this.id = uuid++;
    }
    addSub(target){
        this.subs.push(target);
    }
    depend(){
        if(Dep.target){
            this.addSub(Dep.target);
        }
    }
    notify(){
        let subs = this.subs.slice();
        for(let i=0;i<subs.length;i++){
            subs[i].update();
        }
    }
}