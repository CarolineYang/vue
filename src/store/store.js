import Vue from 'vue'
import VueX from 'vuex'
import defalutState from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'
Vue.use(VueX);
export default ()=>{
    const store= new VueX.Store({
        state:defalutState,
        //修改
        mutations,
        getters,
        actions,
        plugins:[
            (store)=>{
                console.log('ssssssss',store)
            }
        ],
        modules:{
            a:{
                namespaced:true,
                state:{
                    text:1
                },
                mutations:{
                    updateText(state,text1){
                        state.text = text1
                    }
                },
                getters:{
                    textPlus(state,getters,rootState){
                        return state.text + rootState.count + rootState.b.text
                    }
                },
                actions:{
                    add({commit,rootState}){
                       commit('updateText',rootState.count);
                       // commit('updateText',rootState.count,{root:true});
                    }
                }
            },
            b:{
                namespaced:true,
                state:{
                    text:2
                },
                actions:{

                }
            }
        }
    })

    if (module.hot) {
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './actions/actions',
            './getters/getters'
        ],()=>{
            const newState = require('./state/state').default;
            const newMutations = require('./mutations/mutations').default;
            const newActions = require('./actions/actions').default;
            const newGetters = require('./getters/getters').default;
            store.hotUpdate({
                state: newState,
                mutations: newMutations,
                actions: newActions,
                getters: newGetters
            })
        })
    }
    return store
}