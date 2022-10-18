<template>
  <div class="wrapper" :class="{ 'bg-primary': theme, 'bg-white': !theme }">
    <div class="team-4">
      <div style="height: 200px;"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 ml-auto mr-auto">
            <div
              class="card card-profile card-horizontal"
              :class="{ 'bg-primary': theme, 'bg-white': !theme }"
            >
              <div class="row">
                <div class="col-xl-7">
                  <div
                    class="card-image no-mask"
                    :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                  >
                    <div
                      class="hero"
                      :style="{
                        backgroundImage:
                          'url(' + 'https:' + post.hero_image + ')'
                      }"
                    ></div>
                    <!-- <a href="javascript:;">
                      <img class="img" :src="'https:' + post.hero_image" />
                    </a> -->
                  </div>
                </div>
                <div
                  class="col-xl-5"
                  :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                >
                  <div
                    class="card-body mt-3"
                    :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                  >
                    <div class="card-profile-stats">
                      <div class="text-left p-0">
                        <span
                          class="heading"
                          :class="{ 'text-white': theme, 'text-black': !theme }"
                          >{{ post.title_text }}</span
                        >
                        <span
                          class="description"
                          :class="{ 'text-white': theme, 'text-black': !theme }"
                          >Name</span
                        >
                      </div>
                    </div>
                    <div class="card-profile-stats">
                      <div class="text-left p-0">
                        <span
                          class="heading"
                          :class="{ 'text-white': theme, 'text-black': !theme }"
                          >{{ post.focus_text }}</span
                        >
                        <span
                          class="description"
                          :class="{ 'text-white': theme, 'text-black': !theme }"
                          >Focus</span
                        >
                      </div>
                    </div>

                    <div class="card-profile-stats">
                      <div
                        class="text-left p-0"
                        :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                      >
                        <div
                          class="avatar-group mb-2"
                          :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                        >
                          <p
                            :class="{
                              'text-white': theme,
                              'text-black': !theme
                            }"
                          >
                            {{ post.desc_text }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <base-alert type="primary" v-if="alert.show">
        <strong>{{ alert.stat }}!</strong> {{ alert.msg }}
      </base-alert>
      <div class="p-4">
        <form @submit.prevent="download">
          <div class="" style="display: flex;">
            <base-input
              required
              v-model="model.email"
              style="margin: auto; width: 80%;"
            ></base-input>
            <div style="width: 15px;"></div>
            <base-button
              tag="a"
              style="margin: auto; width: 50%;"
              @click="download"
              class="text-default"
              target="_blank"
              type="primary"
              link
              >Download File</base-button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Glide, GlideSlide } from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
import BaseInput from "@/components/BaseInput";
import BaseAlert from "@/components/BaseAlert.vue";
export default {
  bodyClass: "blog-post",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    BaseInput,
    BaseAlert
  },
  data() {
    return {
      model: {
        email: "Enter your email to download.."
      },
      alert: {
        stat: "Success",
        msg: "Your file is ready to go!",
        show: false
      }
    };
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
    download() {
      const link = this.$store.state.blog.blog.file_link_text;

      const formData = {
        email: this.model.email,
        id: this.$store.state.blog.blog._id
      };
      if (this.model.email.includes("@")) {
        window.open(link, "_blank");
        this.$store.dispatch("deez/assetDownload", formData).then(() => {
          this.model.email = "";
          this.alert = {
            msg: "Your file is ready to go!",
            stat: "Success"
          };
          this.showAlert();
          setTimeout(this.hideAlert(), 3000);
        });
      } else {
        this.alert = {
          msg: "Something went wrong.",
          stat: "Error",
          show: true
        };
        setTimeout((this.alert.show = false), 3000);
      }
    },
    hideAlert() {
      setTimeout((this.alert.show = false), 3000);
    },
    showAlert() {
      this.alert.show = true;
    }
  },
  created() {
    //alert(JSON.stringify(this.$store.state.blog.blog));
  }
};
</script>
<style scoped>
.hero {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}
</style>
