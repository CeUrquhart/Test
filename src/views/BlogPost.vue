<template>
  <div class="wrapper">
    <div class="" v-if="post.type_text !== 'tool'">
      <div class="page-header header-filter">
        <div
          class="page-header-image"
          :style="{
            backgroundImage: 'url(' + 'https:' + post.hero_image + ')'
          }"
        ></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mx-auto text-center">
              <h2 class="display-2 text-white">{{ post.title_text }}</h2>
            </div>
          </div>
        </div>
      </div>

      <section
        class="section"
        v-for="(i, index) in post.sects"
        :key="index"
        :class="{ 'bg-primary': theme, 'bg-white': !theme }"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3
                class="title"
                v-if="i.section_title_text"
                :class="{ 'text-white': theme, 'text-black': !theme }"
              >
                {{ i.section_title_text }}
              </h3>
              <p :class="{ 'text-white': theme, 'text-black': !theme }">
                {{ i.body_text }}
              </p>
              <div
                v-if="i.section_img_file"
                style="height: 200px; background-size: cover; background-repeat: no-repeat; background-position: center;"
                :style="{
                  backgroundImage: 'url(' + 'https:' + i.section_img_file + ')'
                }"
              ></div>
              <!-- <img
                :src="'https:' + i.section_img_file"
                alt=""
                v-if="i.section_img_file"
              /> -->
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <Tool />
    </div>

    <!-- Blog Section -->
    <Blog></Blog>
  </div>
</template>
<script>
import { Glide, GlideSlide } from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
import Tool from "./sections/Blogs/Tool.vue";
import Blog from "./sections/Blogs/Blog3.vue";
import moment from "moment";
export default {
  bodyClass: "blog-post",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    Blog,
    Tool
  },
  computed: {
    post() {
      return this.$store.state.blog.blog;
    },
    date() {
      const date = this.post["Created Date"].getDate();
      return date;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  methods: {
    moment() {
      return moment();
    }
  },
  async created() {
    const id = await localStorage.getItem("content");
    if (id && this.$store.state.blog.blog === null) {
      this.$store.dispatch("blog/setBlog", id);
    }
  }
};
</script>
<style></style>
