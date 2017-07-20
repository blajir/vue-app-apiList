<template>
  <div id="app">
    <img src="./assets/logo.png">
    <test></test>
    <router-view></router-view>
    <!-- <apiList></apiList> -->
  </div>
</template>

<script>
// test.vueコンポーネントを呼び出し
import Test from './components/test.vue';
// import ApiList from './components/apiList.vue';

export default {
  name: 'app',
  components: {
    Test,
    // ApiList
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#apiList{
  > li{
    margin-bottom: 40px;
  }
}
ul, li{
  padding: 0;
  list-style: none;
}
</style>
