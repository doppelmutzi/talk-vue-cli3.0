<template>
  <section class="image-slide">
    <h2 v-html="title"></h2>
    <img class="image-slide-img" :src="url"/>
  </section>
</template>
<script>
export default {
  props: [ 'title', 'file' ],
  computed: {
    url: function() {
      return 'src/assets/' + this.file;
    }
  }
}
</script>
<style>
  .image-slide .image-slide-img {
    border: none;
    background: transparent;
    padding: 20px;
  }
</style>

