<template>
  <div class="wrapper">
    <video autoplay muted loop src="img/pages/stream.mp4"></video>

    <div class="page-header page-header-small header-filter viewport-header">
      <div class="content-center">
        <div class="row">
          <div class="col mx-auto text-center">
            <h1 class="title text-white text-center">
              Latest Tech & Marketing Content
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="main " :class="{ 'bg-primary': theme, 'bg-white': !theme }">
      <!-- Related Stories -->
      <Blog></Blog>
      <br />
      <br />
      <!-- Latest Blogposts -->
      <div class="section team-4 ">
        <div class="team-2">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto text-center mb-5">
                <h3 class="display-3 text-white">The Executive Team</h3>
              </div>
            </div>
            <div class="row">
              <div
                class="col-lg-4 col-md-6"
                v-for="(i, index) in squad"
                :key="index"
              >
                <card class="card" data-image="profile-image">
                  <template slot="header">
                    <div class="">
                      <a>
                        <img
                          class="img rounded"
                          :src="'https:' + i.headshot_image"
                        />
                      </a>
                    </div>
                  </template>
                  <template slot="body">
                    <h4 class="display-4 mb-0">{{ i.name_text }}</h4>
                    <p class="lead h6">{{ i.title_text }}</p>
                    <div class="table-responsive"></div>
                  </template>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Blog from "./sections/Blogs/Blog3.vue";

export default {
  components: {
    Blog
  },
  computed: {
    squad() {
      return this.$store.state.lilbig.team;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  created() {
    this.$store.dispatch("blog/fetchBlogs");
  }
};
</script>
<style type="scss">
video {
  object-fit: cover !important;
  width: 100vw !important;
  height: 60vh !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
}
.viewport-header {
  position: relative !important;
  height: 25% !important;
  text-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
</style>
