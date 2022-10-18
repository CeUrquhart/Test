<template>
  <div>
    <span>
      <canvas id="custom-canvas" class="child" :width="count" height="770">
      </canvas
    ></span>
  </div>
</template>

<script>
import Vue from "vue";
import VueConfetti from "vue-confetti";

Vue.use(VueConfetti);

export default {
  props: ["bck"],
  data() {
    return {
      count: window.innerWidth,
      primary: this.$store.state.lilbig.nightMode
    };
  },
  computed: {
    isMob() {
      return window.innerWidth > 375;
    }
  },
  methods: {
    start() {
      this.$confetti.start({
        canvasId: "custom-canvas",
        defaultDropRate: 5,
        windSpeedMax: 0.1,
        particlesPerFrame: 0.2,
        particles: [
          {
            type: "image",
            size: 10,
            url:
              "https://s3.amazonaws.com/appforest_uf/f1611639295167x986250902732780500/lilbrain25.png"
          },
          {
            type: "image",
            size: 5,
            url:
              "https://s3.amazonaws.com/appforest_uf/f1611639295167x986250902732780500/lilbrain25.png"
          },
          {
            type: "image",
            size: 5,
            url:
              "https://s3.amazonaws.com/appforest_uf/f1611639295167x986250902732780500/lilbrain25.png"
          },
          {
            type: "image",
            size: 2.5,
            url:
              "https://s3.amazonaws.com/appforest_uf/f1611639295167x986250902732780500/lilbrain25.png"
          }
        ]
      });
    },

    onResize(event) {
      this.count = window.innerWidth;
      console.log("window has been resized", event);
    }
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener("resize", this.onResize);
    this.start();
  },

  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  }
};
</script>
<style>
.child {
  position: absolute;
}
</style>
