<template>
  <div :class="{ 'bg-primary': theme, 'bg-white': !theme }" class="p-4 ">
    <div class=" p-4">
      <div style="height: 100px;"></div>

      <div class="row align-items-center text-left">
        <div
          class="col"
          v-if="!isMob"
          style="opacity: 1;background-image: url('https://s3.amazonaws.com/appforest_uf/f1611994284632x117235320379673440/dataz.png'); background-size: contain; background-repeat: no-repeat; background-position: center;"
        >
          <div style="height: 100px;"></div>
          <div style="height: 100px;"></div>
          <div style="height: 100px;"></div>
          <div style="height: 100px;"></div>
        </div>
        <div class="col">
          <h1
            style="font-size: 35px;"
            class="  text-center"
            :class="{ 'text-white': theme, 'text-black': !theme }"
          >
            LilBig
            <span class="text-success">{{ page.data.name_text }}</span>
          </h1>
          <p
            class="lead pb-0 text-center"
            :class="{ 'text-white': theme, 'text-black': !theme }"
            style="font-size: 24px;"
          >
            {{ page.data.headline_text }}
          </p>
          <div style="height: 100px;" v-if="!isMob"></div>
          <div class="row row-input">
            <div class="col-12" style="display: flex;">
              <button
                class="btn btn-success"
                style="border-radius: 8px; width: 100%; margin: auto;"
                @click="hot()"
              >
                Start Your {{ page.data.name_text }} Project
              </button>
            </div>
          </div>
        </div>
        <div
          class="col"
          v-if="!isMob"
          style="opacity: 1;background-image: url('https://s3.amazonaws.com/appforest_uf/f1611976040758x145563748704815360/Data%20Filtering.png'); background-size: contain; background-repeat: no-repeat; background-position: center;"
        >
          <div style="height: 100px;"></div>
          <div style="height: 100px;"></div>
          <div style="height: 100px;"></div>
          <div style="height: 100px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      primary: this.$store.state.lilbig.nightMode,
      title: null,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    },
    isMob() {
      return this.windowWidth < 500;
    },
    lbd() {
      return this.$store.state.lilbig.lbd;
    },
    page() {
      return this.$store.state.lilbig.servicePage;
    }
  },
  methods: {
    playSound(url) {
      var audio = new Audio(url);
      audio.play();
    },
    hot() {
      this.$store.commit("deez/coldHeader");
      this.$router.push({ path: "/" });
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
