<template>
    <div @click="show">this is {{count}} login {{fullName}}

        <p>{{countSelf}}</p>
        <p>{{textA}} {{textB}} {{textAA}}</p>
    </div>

</template>

<script>
// <!--    获取vuex的配置-->
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "login",
        props:['id'],
        mounted(){
            console.log('login',this.id);
            //调用 store
            //可以直接在外部修改vuex的数据但是不建议这么做 不规范
            // this.$store.state.count=80;
            //触发actions里的操作
            // this.$store.dispatch('updateCountAsync',10000);
            let i=1;
            setInterval(()=>{
                //修改store里的数据
                this.$store.commit('updateCount',i++);

            },1000)
            setTimeout(()=>{
                //修改store里的数据
                this.$store.commit('updateName',{text:'ypp'});
            },1000)
        },
        computed: {
            ...mapState(['count']),
            ...mapState({
                countSelf:(state)=>{
                    return state.count
                },
                textAA:(state)=>{
                    return state.a.text
                }
            }),
            ...mapGetters(['fullNames']),

            count(){
                return this.$store.state.count
            },
            fullName(){
                return this.$store.getters.fullName
            },
            textA(){
                return this.$store.state.a.text
            },
            textB(){
                return this.$store.state.b.text
            }
        },
        methods:{
            ...mapMutations(['updateCount']),
            ...mapActions(['updateCountAsync']),
            show() {
                console.log(this.$store.state.count, this.countSelf, this.count, this.fullNames);
                // this.updateCountAsync(98);
            }

        },
        beforeRouteEnter(to,from,next){
            // console.log('beforeRouteEnter',to,from)
            next()
        }
    }
</script>

<style scoped>

</style>