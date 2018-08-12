import Vue from "vue";

import SlideTitle from "./SlideTitle.vue";

import overview from "./slides/overview/index";
overview.slide();

new Vue({
  el: "#slide-title",
  render: h => h(SlideTitle)
});
