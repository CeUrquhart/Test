<template>
  <div :class="{ 'bg-primary': theme, 'bg-white': !theme }" class="p-4 ">
    <Confetti></Confetti>

    <div style="height: 100px;"></div>
    <div class="container p-4">
      <div class="row align-items-center text-left">
        <div class="col-lg-6 " v-if="!isMob">
          <img
            class=""
            src="https://s3.amazonaws.com/appforest_uf/f1611198520080x522305268695696600/lilbig%20graphic.png"
            width="100%"
            v-if="theme"
          />
          <img
            src="https://s3.amazonaws.com/appforest_uf/f1611632024124x179935044573825700/lilbig%20graphicwhite.png"
            width="100%"
            alt=""
            v-else
          />
        </div>
        <div class="col-lg-6 col-12">
          <p
            class=" h4 "
            :class="{
              'text-white': theme,
              'text-black': !theme,
              'text-center': isMob
            }"
          >
            Take your idea from<span class="text-default"> lil</span> to
            <span class="text-success">Big</span>
          </p>
          <p
            class="lead pb-0 "
            :class="{
              'text-white': theme,
              'text-black': !theme,
              'text-center': isMob
            }"
            style="font-size: 14px;"
          >
            Fueled by caffeine and whitty banter, we connect the dots between
            idea & execution. Time is money and that's why developing a process
            for creating systems is one of the most overlooked aspect in both
            product & business devleopment. That's why we created the BOSH
            Framework, a communication-driven approach to solving technical
            problems without having to use more tech buzzwords.
          </p>
          <div class="row row-input">
            <div class="col-12">
              <button
                class="btn btn-success"
                style="border-radius: 8px; width: 100%;"
                @click="
                  playSound(
                    'https://s3.amazonaws.com/appforest_uf/f1611715183018x273035206941942840/Tape%20Deck-SoundBible.com-967485391.mp3'
                  );
                  hot();
                "
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div style="height: 100px;"></div>
    <div style="height: 100px;"></div> -->
  </div>
</template>
<script>
import Confetti from "@/views//components/Confetti";
export default {
  components: {
    Confetti
  },
  data() {
    return {
      primary: this.$store.state.lilbig.nightMode,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    },
    isMob() {
      return this.windowWidth < 500;
    }
  },
  methods: {
    playSound(url) {
      var audio = new Audio(url);
      audio.play();
    },
    hot() {
      this.$store.commit("deez/coldHeader");
    },
    toggleNav() {
      this.$store.dispatch("lilbig/togglePopNav");
    },
    toggleTheme() {
      this.$store.dispatch("lilbig/toggleNightMode");
    }
  },
  watch: {
    primary: function(vnew) {
      this.toggleTheme();
      if (vnew) {
        this.playSound(
          "https://soundbible.com/mp3/Air%20Plane%20Ding-SoundBible.com-496729130.mp3"
        );
      } else {
        this.playSound(
          "https://s3.amazonaws.com/appforest_uf/f1611714023491x157500777026451380/Electronic_Chime-KevanGC-495939803.mp3"
        );
      }
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
.test {
  text-transform: capitalize;
}
.bb {
  border-bottom: 1px solid #cedcea;
}
</style>
