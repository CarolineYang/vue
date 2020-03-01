//组装state里的数据
export default {
    fullName(state){
        return state.name + state.count+'6669'
    },
    fullNames(state){
        return state.name + state.name
    }
}