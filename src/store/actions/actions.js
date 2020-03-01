//异步修改state数据
export default {
    updateCountAsync(store,data){
        setTimeout(()=>{
            store.commit('updateCount',data)
        },3000)

    }
}