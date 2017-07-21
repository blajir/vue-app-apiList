<template>
  <div id="apiList-wrapper">
    <h2>APIを取得</h2>
    <ul id="apiList" class="container">
      <li v-for="item in items" class="row">
        <ul class="col">
          <li v-if="item._embedded['wp:featuredmedia']">
            <img :src="`${item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}`">
          </li>
          <li><router-link :to="{name: 'content', params: { id: item.id }}">ID : {{item.id}}</router-link></li>
          <li>投稿日 : {{item.date}}</li>
          <li>記事タイトル : <a :href="`${item.link}`" target="_blank">{{item.title.rendered}}</a></li>
          <li>スラッグ : <span class="badge badge-default">{{item.slug}}</span></li>
          <!-- <li v-html="item.excerpt.rendered"></li> -->
          <!-- <li v-html="item.content.rendered"></li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'apiList',
  props: ['items'],
}
</script>
