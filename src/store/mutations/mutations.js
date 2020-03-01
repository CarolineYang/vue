//同步修改state里的数据，也可以直接在外面修改数据但是不建议
export default {
    //只有两个参数,要想传两个参数，得把他包装成对象
    updateCount(state,num){
        state.count = num
    },
    updateName(state,nameObj){
        state.name = nameObj.text
    }
}