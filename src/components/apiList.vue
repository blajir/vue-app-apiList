<template>
  <div id="apiList-wrapper">
    <h2>APIを取得</h2>
    <!--<button v-on:click="apiSort">TITLE昇順ボタン</button>-->
    <ul id="apiList">
      <li v-for="item in items">
        <ul>
          <li>USERID : {{item.userId}}</li>
          <li>ID : {{item.id}}</li>
          <li>TITLE : {{item.title}}</li>
          <li>BODY : {{item.body}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// Ajaxをいい感じにやってくれるモジュール
import axios from 'axios'

export default {
  name: 'apiList',
  data: () => {
    return {
      items: [],
      errors: [],
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data

      // this.items.push({
      //   userId: 11,
      //   id: 101,
      //   title: 'これは手動で追加したタイトルだよ',
      //   body: 'これは手動で追加したタイトルだよ'
      // });
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
