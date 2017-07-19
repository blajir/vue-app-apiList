<template>
  <div id="apiList-wrapper">
    <h2>APIを取得</h2>
    <ul id="apiList">
      <li v-for="item in items">
        <ul>
          <li>ID : {{item.id}}</li>
          <li>投稿日 : {{item.date}}</li>
          <li>記事タイトル : <a :href="`${item.link}`" target="_blank">{{item.title.rendered}}</a></li>
          <li>スラッグ : {{item.slug}}</li>
          <li>本文 : {{item.excerpt.rendered}}</li>

          <!-- <li>{{item['_embedded']['wp:featuredmedia'][0]['source_url']}}</li> -->
          <!-- wp-json/wp/v2/mediaを取得すると下記が表示される -->
          <!-- <li>{{item.source_url}}</li> -->
          <!-- <li>{{item.media_details.sizes.full.source_url}}</li> -->
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
    // 最新の5件の記事を取得
    // axios.get('http://localhost:8888/wordpress/wp-json/wp/v2/media')
    axios.get('http://localhost:8888/wordpress/wp-json/wp/v2/posts?_embed&per_page=5')
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data;
    })
    .catch(e => {
      this.errors.push(e)
      console.log(this.errors)
    })
  }
}
</script>
