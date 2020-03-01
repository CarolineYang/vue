//组装state里的数据
export default {
    fullName(state){
        return state.name + state.count
    },
    fullNames(state){
        return state.name + state.name
    }
}