import Vue from 'vue'
import VueX from 'vuex'
import defalutState from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'
Vue.use(VueX);
export default ()=>{
    return new VueX.Store({
        state:defalutState,
        //修改
        mutations,
        getters,
        actions,
        modules:{
            a:{
                state:{
                    text:1
                }
            },
            b:{
                state:{
                    text:2
                }
            }
        }
    })
}