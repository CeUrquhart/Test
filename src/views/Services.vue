<template>
  <div :class="{ 'bg-primary': theme, 'bg-white': !theme }">
    <Header />
    <LilBig />
    <AvgDev />
    <Features />
    <Clients />
    <Pricing />
  </div>
</template>
<script>
import Features from "@/views/sections/Features/Feature3";
import Header from "@/views/sections/Headers/ServiceHeader.vue";
import LilBig from "@/views/sections/Features/Feature7";
import AvgDev from "./sections/AvgDev.vue";
import Pricing from "./sections/Pricing/Pricing5";
import Clients from "@/components/Clients.vue";
export default {
  components: {
    Features,
    Header,
    LilBig,
    AvgDev,
    Pricing,
    Clients
  },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  created() {
    this.$store.dispatch("lilbig/fetchServices");
  }
};
</script>
<style></style>
