<template>
  <div :class="{ 'bg-primary': theme, 'bg-white': !theme }">
    <Header />
    <WeDiff :uvps="page.uvps" />
    <WhatToExpect />
    <Tech />
    <Testy />
    <Faqs />
  </div>
</template>

<script>
import Header from "@/views/sections/Headers/Header3.vue";
import WeDiff from "../../src/views/sections/WeDiff.vue";
import WhatToExpect from "@/components/WhatToExpect.vue";
import Testy from "../views/sections/Testimonial/Testimonial1.vue";
import Faqs from "@/components/Faqs.vue";
import Tech from "@/components/TechStack.vue";
export default {
  components: { Header, WeDiff, Faqs, WhatToExpect, Testy, Tech },
  computed: {
    page() {
      return this.$store.state.lilbig.servicePage;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  async created() {
    const id = await localStorage.getItem("id");
    if (id) {
      this.$store.dispatch("lilbig/fetchServiceById", id);
    }
  }
};
</script>
<style></style>
