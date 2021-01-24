import tables from "../components/tables";
const Table= {
    install: function(Vue){
        // Vue.mixin({
        //     beforeCreate() {
        //         console.log('我是table',this);
        //
        //     }
        // })
        Vue.component("Tablesa",tables);
    }
}
export default Table