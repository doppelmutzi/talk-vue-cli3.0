<template>
  <section class="slide">
    <h2 v-html="title"></h2>
    <ul v-if="show">
      <li v-for="item in items" v-html="item"></li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ["title", "items"],
  computed: {
    show: function() {
      return this.items && this.items.length > 0;
    }
  }
};
</script>
<style>
.slide h2 strong,
.slide li strong {
  color: aqua;
}
</style>
