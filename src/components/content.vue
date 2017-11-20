<template>
  <div>
    <!-- <p v-html="wpArticle.content"></p> -->
     <p v-html="wpArticle.content.rendered"></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'content',
  data() {
    return {
      wpArticle: [],
    }
  },
  props: ['items'],
  created() {
    let url = location.href.split('/');
    let pageId = url.length - 1;
    let apiUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/posts/' + url[pageId];

    axios.get(apiUrl)
      .then(response => {
        // JSON responses are automatically parsed.
        this.wpArticle = response.data;
      })
      .catch(e => {
        this.errors.push(e);
        console.log(this.errors);
      })
  }
}
</script>
