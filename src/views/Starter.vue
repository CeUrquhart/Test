<template>
  <div :class="{ 'bg-white': !theme, 'bg-primary': theme }">
    <Header v-if="hot" />
    <HotHeader v-else />
    <AvgDev />
    <Toolz />
    <Clients />
    <Feets />
    <Pricing />
  </div>
</template>
<script>
import Header from "./sections/Headers/Header5.vue";
import HotHeader from "./sections/Headers/HotHeader.vue";
import Feets from "./sections/Features/Feature3.vue";
import AvgDev from "./sections/AvgDev.vue";
import Pricing from "./sections/Pricing/Pricing5";
import Clients from "@/components/Clients.vue";
import Toolz from "./sections/Projects/Project1.vue";
export default {
  components: { Header, HotHeader, AvgDev, Feets, Pricing, Clients, Toolz },

  data() {
    return {
      primary: this.$store.state.lilbig.nightMode
    };
  },
  computed: {
    hot() {
      return this.$store.state.deez.hotHeader;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  created() {
    this.$store.dispatch("lilbig/fetchClients");
    this.$store.dispatch("blog/fetchBlogs");
    this.$store.dispatch("lilbig/fetchTeam");
    this.$store.dispatch("lilbig/fetchServices");
  }
};
</script>
<style></style>
