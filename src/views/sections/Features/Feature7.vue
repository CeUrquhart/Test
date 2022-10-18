<template>
  <div
    class="section features-7 "
    :class="{ 'bg-primary': theme, 'bg-white': !theme }"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-center mx-auto">
          <h3
            class="display-3"
            :class="{ 'text-white': theme, 'text-black': !theme }"
          >
            Generating Results
          </h3>
          <p class="" :class="{ 'text-white': theme, 'text-black': !theme }">
            From keywords optimized for blog posts, to paid search ads or lead
            enrichment, you will have many options to choose from. We go above
            and beyond with options for you to optimize your business goals with
            all the resources you need.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-12">
          <div class="row ">
            <div
              class="col-md-3 col-sm-12 pt-2"
              v-for="(s, index) in services"
              :key="index"
            >
              <card
                class="card-lift--hover shadow border-0"
                :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                style="height: 300px;"
              >
                <template slot="body" class="py-5">
                  <div
                    style="display: flex;"
                    :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                  >
                    <div style="margin: auto;">
                      <img
                        :src="'https:' + s.icon_image"
                        style="margin: auto;"
                      />
                    </div>
                  </div>
                  <div style="height: 35px;"></div>

                  <h6
                    class=" text-uppercase pt-1 text-center"
                    :class="{ 'text-white': theme, 'text-black': !theme }"
                  >
                    {{ s.name_text }}
                  </h6>
                  <p
                    class="description mt-3 text-center "
                    :class="{ 'text-white': theme, 'text-black': !theme }"
                  >
                    {{ s.headline_text }}
                  </p>
                  <div style="display: flex;">
                    <base-button
                      @click="goToPage(s._id)"
                      tag="a"
                      type="default"
                      style="margin: auto; width: 100%;"
                      >Learn more</base-button
                    >
                  </div>
                </template>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    services() {
      return this.$store.state.lilbig.services;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  methods: {
    goToPage(value) {
      const id = value;
      this.$store.dispatch("lilbig/fetchServiceById", id);
    }
  }
};
</script>
<style></style>
