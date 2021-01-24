<template>
  <div id="app">
    <Tablesa></Tablesa>
<!--    <router-link to="/hello/123">hello</router-link>-->
<!--    <span @click="hh">login</span>-->

<!--    <router-link to="/login">login</router-link>-->
<!--    <router-view/>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      a:['aaa'],
      b:10,
      c:{
        mm:10
      }
    }
  },
  methods:{
    hh(){
      // this.$router.push({path:'hello/152',component:HelloWorld})
      this.$router.push('hello/15266')
    }

  },
  mounted() {
    // console.log(this.a,this.b,this.c)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
