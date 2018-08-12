import Vue from "vue";
import Overview from "./Overview.vue";
import Tweet from "./Tweet.vue";

export default {
  slide
};

function slide() {
  new Vue({
    el: "#slide-overview",
    render: h => h(Overview)
  });

  new Vue({
    el: "#slide-tweet",
    render: h => h(Tweet)
  });
}
