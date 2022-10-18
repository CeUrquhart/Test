<template>
  <div class="container">
    <div style="height: 150px;"></div>
    <h2
      class="text-center pb-3"
      style="font-weight: bold;"
      :class="{ 'text-white': theme, 'text-black': !theme }"
    >
      Some Of The Tools We Use
    </h2>
    <div style="height: 50px;"></div>

    <div class="row">
      <div class="col-4" v-for="(t, index) in tech" :key="index">
        <card :class="{ 'bg-primary': theme, 'bg-white': !theme }">
          <div
            class="container img"
            :class="{ 'text-white': theme, 'text-black': !theme }"
            style="height: 175px;"
            :style="{ backgroundImage: 'url(' + 'https:' + t.logo_image + ')' }"
          >
            <!-- <img :src="'https:' + t.logo_image" alt="" /> -->
          </div>
          <div class="container">
            <h6
              class="text-center"
              :class="{ 'text-white': theme, 'text-black': !theme }"
            >
              {{ t.name_text }}
            </h6>
          </div>
        </card>
      </div>
    </div>
    <hr style="width: 100%;" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  componets: { Card },
  computed: {
    tech() {
      return this.$store.state.lilbig.servicePage.tools;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  }
};
</script>

<style scoped>
.img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
