<template>
  <div class="bg-default">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="text-center p-3 text-white">
            What Your Can Expect From Your
            {{ this.$store.state.lilbig.servicePage.data.name_text }} Project
          </h2>
        </div>
      </div>
    </div>
    <div class="container p-3">
      <div class="row">
        <div class="col-12" v-for="(i, index) in feats" :key="index">
          <h5 class="text-center h6 text-white">
            {{ i.feature_text }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    feats() {
      return this.$store.state.lilbig.servicePage.features;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  }
};
</script>

<style></style>
