<template>
  <div class="testimonials-1">
    <div class="container">
      <b-carousel
        id="carousel-testimonials"
        height="150vh"
        class="carousel-team"
        ref="carouselTestimonials"
      >
        <div class="row">
          <div class="col-md-6 col-sm-12 ml-auto mr-auto text-center">
            <h2
              class=""
              :class="{
                'text-white': theme,
                'text-black': !theme,
                'text-center': isMob
              }"
            >
              What Clients Say
            </h2>
          </div>
        </div>
        <b-carousel-slide
          class="carousel-inner"
          v-for="(t, index) in testy"
          :key="index"
        >
          <div
            class="row"
            :class="{ 'text-center': isMob, 'text-left': !isMob }"
          >
            <div class="col-md-5 ml-auto mt-5 col-sm-12">
              <div class="container">
                <h3
                  class="h6"
                  :class="{ 'text-white': theme, 'text-black': !theme }"
                >
                  {{ t.name_text }}
                </h3>
              </div>
              <div class="container">
                <h3 class="text-danger ">{{ t.company_text }}</h3>
              </div>
              <div class="container">
                <h4
                  v-if="isMob"
                  class="lead"
                  style="font-size: 14px;"
                  :class="{ 'text-white': theme, 'text-black': !theme }"
                >
                  "{{ t.quote_text }}"
                </h4>
                <h4
                  v-if="!isMob"
                  class="lead"
                  style="font-size: 22px;"
                  :class="{ 'text-white': theme, 'text-black': !theme }"
                >
                  "{{ t.quote_text }}"
                </h4>
              </div>
            </div>
            <div class="col-md-5 col-sm-12 p-5 ml-auto">
              <div class="p-3">
                <img
                  class="img-fluid rounded shadow transform-perspective-right"
                  :src="'https:' + t.image_image"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
      <hr style="width: 100%;" />
    </div>
  </div>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    testy() {
      return this.$store.state.lilbig.servicePage.testimonials;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    },
    isMob() {
      return this.windowWidth < 500;
    }
  },
  methods: {
    prev() {
      this.$refs.carouselTestimonials.prev();
    },
    next() {
      this.$refs.carouselTestimonials.next();
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>
<style>
.testimonials-1 .carousel-caption {
  width: 100%;
  left: 0 !important;
}

.testimonials-1 .carousel-control-prev,
.testimonials-1 .carousel-control-next {
  z-index: 9999;
}
</style>
