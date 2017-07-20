<template>
  <div class="test">
    <h1>これはテスト用テンプレートです</h1>
    <p>{{hoge}}</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: ['hoge'],
}
</script>
