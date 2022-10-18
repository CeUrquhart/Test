<template>
  <div class="pt-3">
    <div style="height: 50px;"></div>

    <div class="container">
      <h2
        class="text-center"
        :class="{ 'text-white': theme, 'text-black': !theme }"
      >
        Some Frequently Asked Questions
      </h2>
    </div>
    <div class="container">
      <collapse
        :multiple-active="false"
        :class="{ 'bg-primary': theme, 'bg-white': !theme }"
      >
        <collapse-item
          name="1"
          v-for="(i, index) in faqs"
          :key="index"
          :class="{ 'bg-primary': theme, 'bg-white': !theme }"
        >
          <h5
            slot="title"
            class="mb-0 btn btn-link w-100 text-success text-left"
          >
            {{ i.answer_text }}<i class="ni ni-bold-down float-right pt-1"></i>
          </h5>
          <div :class="{ 'text-white': theme, 'text-black': !theme }">
            {{ i.question_text }}
          </div>
        </collapse-item>
      </collapse>
    </div>
    <div style="height: 150px;"></div>
  </div>
</template>

<script>
import Collapse from "@/components/Collapse/Collapse";
import CollapseItem from "@/components/Collapse/CollapseItem";

export default {
  components: {
    Collapse,
    CollapseItem
  },
  computed: {
    faqs() {
      return this.$store.state.lilbig.servicePage.faqs;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  }
};
</script>
