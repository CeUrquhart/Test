<template>
  <div
    class="container pt-5"
    :class="{ 'bg-primary': theme, 'bg-white': !theme }"
  >
    <div style="height: 200px;"></div>
    <div class="row pb-3">
      <div class="col-12">
        <h2
          class="text-center"
          :class="{ 'text-white': theme, 'text-black': !theme }"
        >
          What makes our
          {{ this.$store.state.lilbig.servicePage.data.name_text }} Different?
        </h2>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-4 col-sm-12"
        v-for="(i, index) in this.uvps"
        :key="index"
      >
        <card :class="{ 'bg-primary': theme, 'bg-white': !theme }">
          <div style="height: 300px;">
            <div class="container" style="display: flex;">
              <img
                :src="'https:' + i.graphic_image"
                alt=""
                style="margin: auto;"
              />
            </div>
            <div class="container">
              <h5
                class="text-center"
                :class="{ 'text-white': theme, 'text-black': !theme }"
              >
                {{ i.title_text }}
              </h5>
            </div>
            <div class="container pt-4">
              <p
                class="text-center"
                :class="{ 'text-white': theme, 'text-black': !theme }"
              >
                {{ i.description_text }}
              </p>
            </div>
          </div>
        </card>
      </div>
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>
<script>
import Card from "@/components/Card";
export default {
  components: { Card },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  props: {
    uvps: {
      type: Array
    }
  }
};
</script>
<style></style>
