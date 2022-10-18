<template>
  <section class="blogs-3" :class="{ 'bg-primary': theme, 'bg-white': !theme }">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-8 mx-auto">
          <h2
            class="title mb-5 pt-5"
            :class="{ 'text-white': theme, 'text-black': !theme }"
          >
            Recent Content
          </h2>
          <div
            class="card card-blog card-plain blog-horizontal mb-5"
            v-for="(b, index) in blogs"
            :key="index"
          >
            <div class="row" @click="sendBlog(b._id)">
              <div class="col-lg-4">
                <div class="card-image shadow">
                  <a>
                    <img
                      class="img rounded"
                      :src="'https:' + b.hero_image"
                      style="max-height: 250px;"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h3
                        class="card-title"
                        :class="{ 'text-white': theme, 'text-black': !theme }"
                      >
                        <a
                          :class="{ 'text-white': theme, 'text-black': !theme }"
                          >{{ b.title_text }}</a
                        >
                      </h3>
                    </div>
                  </div>

                  <div class="row pb-2">
                    <div class="col">
                      <span
                        class="m-2 pl-2 pr-2 text-white bg-success"
                        style="border-radius: 50px; width: 200px;"
                        v-if="b.isblog_boolean"
                        >Article</span
                      >
                      <span
                        class="m-2 pl-2 pr-2 text-white bg-default"
                        style="border-radius: 50px; "
                        v-if="b.istool_boolean"
                      >
                        Tool
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <h6 class="text-white">
                        {{ b["Created Date"] | moment() }}
                      </h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <p class="text-white text-left">{{ b.desc_text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import moment from "moment";
export default {
  computed: {
    blogs() {
      return this.$store.state.blog.feed;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  filters: {
    moment() {
      return moment().format("ll");
    }
  },
  methods: {
    sendBlog(value) {
      const id = value;
      this.$store.dispatch("blog/setBlog", id);
    }
  }
};
</script>
<style></style>
