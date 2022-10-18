<template>
  <div
    class="project-1 pb-5"
    :class="{ 'bg-white': !theme, 'bg-primary': theme }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mr-auto ml-auto text-center mb-5">
          <h3
            class="diaplay-3"
            :class="{ 'text-white': theme, 'text-black': !theme }"
          >
            Some of Our Awesome Projects
          </h3>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-transparent mb-5">
      <div class="container">
        <div class="navbar-translate">
          <p :class="{ 'text-white': theme, 'text-black': !theme }">
            {{ toolFeed.length }} tools found
          </p>
        </div>
      </div>
    </nav>
    <div class="container" :class="{ 'bg-white': !theme, 'bg-primary': theme }">
      <div class="row" :class="{ 'bg-white': !theme, 'bg-primary': theme }">
        <div
          class="col-lg-4 col-md-6"
          v-for="i in toolFeed"
          :key="i.id"
          :class="{ 'bg-white': !theme, 'bg-primary': theme }"
        >
          <card
            headerClasses="mt-2 bg-transparent"
            bodyClasses="text-center p-4"
            :class="{ 'bg-white': !theme, 'bg-primary': theme }"
          >
            <template
              slot="header"
              :class="{ 'bg-white': !theme, 'bg-primary': theme }"
            >
              <div
                class="float-left"
                :class="{ 'bg-white': !theme, 'bg-primary': theme }"
              >
                <img
                  :src="i.iicon_image"
                  height="25"
                  width="25"
                  class="border-transparent bg-transparent"
                />
                <p
                  class="d-inline pl-3"
                  :class="{ 'text-white': theme, 'text-black': !theme }"
                >
                  {{ i.focus_text }}
                </p>
              </div>
            </template>
            <template slot="body">
              <a href="javascript:;">
                <img
                  :src="'https:' + i.hero_image"
                  alt="Circle image"
                  class="img-fluid rounded-circle shadow"
                  style="width: 150px; height: 150px;"
                />
              </a>
              <h4
                class="card-title mt-3 mb-0"
                :class="{ 'text-white': theme, 'text-black': !theme }"
              >
                {{ i.title_text }}
              </h4>
              <p
                class="card-description"
                :class="{ 'text-white': theme, 'text-black': !theme }"
              >
                {{ i.desc_text }}
              </p>
            </template>
          </card>
        </div>
      </div>
      <!-- <footer class="mt-5">
        <base-pagination
          v-model="currentPage"
          class="float-left"
          :total="50"
        ></base-pagination>

        <div class="text-right">
          <p>Showing 6 out of 36</p>
          <div></div>
        </div>
      </footer> -->
    </div>
  </div>
</template>
<script>
import { VBTooltip } from "bootstrap-vue/esm/directives/tooltip/tooltip";

export default {
  components: {},
  directives: {
    BTooltip: VBTooltip
  },
  data() {
    return {
      currentPage: 1,
      items: null
    };
  },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    },
    toolFeed() {
      const data = this.$store.state.blog.feed;
      const items = [];
      for (let key in data) {
        const item = data[key];
        item.id = key;
        if (item.istool_boolean) {
          items.push(item);
        }
      }
      return items;
    }
  },
  async created() {
    this.$store.dispatch("blog/fetchBlogs");
    this.items = await this.$store.state.blog.feed;
  }
};
</script>
<style></style>
