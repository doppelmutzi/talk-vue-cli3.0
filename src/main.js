import Vue from "vue";

import SlideTitle from "./slides/SlideTitle.vue";
import SlideTweet from "./slides/Tweet.vue";

import SlideTpl from "./tpls/SlideTpl.vue";
import CodepenTpl from "./tpls/CodepenTpl.vue";
import ChapterTpl from "./tpls/ChapterTpl.vue";
import ImageSlideTpl from "./tpls/ImageSlideTpl.vue";

var slideMixin = {
  components: {
    Slide: SlideTpl
  },
  computed: {
    title: function() {
      return this.$options.content.title;
    },
    items: function() {
      return this.$options.content.items;
    }
  },
  template: '<slide :title="title" :items="items"></slide>'
};

var imageSlideMixin = {
  components: {
    Slide: ImageSlideTpl
  },
  computed: {
    title: function() {
      return this.$options.title;
    },
    file: function() {
      return this.$options.file;
    }
  },
  template: '<slide :title="title" :file="file"></slide>'
};

var chapterMixin = {
  components: {
    Slide: ChapterTpl
  },
  computed: {
    title: function() {
      return this.$options.title;
    }
  },
  template: '<slide :title="title"></slide>'
};

var codepenMixin = {
  components: {
    Slide: CodepenTpl
  },
  computed: {
    title: function() {
      return this.$options.title;
    },
    pen: function() {
      return this.$options.pen;
    }
  },
  template: '<slide :title="title" :pen="pen"></slide>'
};

import slideIndex from "./slide-content/index.js";

slideIndex.slides.forEach(function(slide) {
  new Vue({
    el: slide.el,
    content: slide,
    mixins: [slideMixin]
  });
});

slideIndex.imageSlides.forEach(function(slide) {
  new Vue({
    el: slide.el,
    title: slide.title,
    file: slide.file,
    mixins: [imageSlideMixin]
  });
});

slideIndex.chapters.forEach(function(slide) {
  new Vue({
    el: slide.el,
    title: slide.title,
    mixins: [chapterMixin]
  });
});

slideIndex.codepens.forEach(function(slide) {
  new Vue({
    el: slide.el,
    title: slide.title,
    pen: slide.pen,
    mixins: [codepenMixin]
  });
});

new Vue({
  el: "#slide-title",
  template: "<slide-title></slide-title>",
  components: { SlideTitle: SlideTitle }
});

new Vue({
  el: "#slide-tweet",
  template: "<slide-tweet></slide-tweet>",
  components: { SlideTweet: SlideTweet }
});
