<template>
  <section>
    <h2>{{ title }}</h2>
    <p
        data-height="265"
        data-theme-id="0"
        :data-slug-hash="pen"
        data-default-tab="js,result"
        data-user="doppelmutzi"
        data-embed-version="2"
        data-pen-title="Vue.js - Global and local components"
        class="codepen">
           <a :href="link">Vue.js</a> by Sebastian Weber (<a href="https://codepen.io/doppelmutzi">@doppelmutzi</a>) on <a href="https://codepen.io">CodePen</a>.</p>
  </section>
</template>
<script>
export default {
  props: [ 'title', 'pen' ],
  computed: {
    link: function() {
      return "https://codepen.io/doppelmutzi/pen/" + this.pen
    }
  }
}
</script>