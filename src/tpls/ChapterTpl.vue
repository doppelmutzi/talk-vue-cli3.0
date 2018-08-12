<template>
  <section class="chapter">
    <h1 v-html="title"></h1>
  </section>
</template>
<script>
export default {
  props: [ 'title' ]
}
</script>
<style>
  .chapter h1 {
    font-size: 3.5em;
  }
  .chapter h1 strong {
    color: aqua;
  }
</style>


