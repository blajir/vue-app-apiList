<template>
  <div id="app">
    <img src="./assets/logo.png">
    <test :hoge="hoge"></test>
    <router-view :items="items"></router-view>
    <!-- <apiList></apiList> -->
  </div>
</template>

<script>
// test.vueコンポーネントを呼び出し
import Test from './components/test.vue';
// Ajaxをいい感じにやってくれるモジュール
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Test,
    // ContentX,
  },
  data() {
    return {
      hoge: 'localhostで立ち上げたwordpressの記事情報を取得します。',
      dataTest: 'データ受け渡し成功!',
      items: [],
      errors: [],
    }
  },
  created() {
    // 最新の5件の記事を取得
    axios.get('http://localhost:8888/wordpress/wp-json/wp/v2/posts?_embed&per_page=5')
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data;
    })
    .catch(e => {
      this.errors.push(e);
      console.log(this.errors);
    })
  },
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
