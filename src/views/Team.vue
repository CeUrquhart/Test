<template>
  <div class="wrapper">
    <div class="main pt-4" :class="{ 'bg-primary': theme, 'bg-white': !theme }">
      <div class="section team-4 ">
        <div class="team-2">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto text-center mb-5">
                <h3
                  class="display-3 "
                  :class="{ 'text-white': theme, 'text-black': !theme }"
                >
                  The Executive Team
                </h3>
              </div>
            </div>
            <div class="row">
              <div
                class="col-lg-4 col-md-6"
                v-for="(i, index) in squad"
                :key="index"
              >
                <card
                  class="card"
                  data-image="profile-image"
                  :class="{ 'bg-primary': theme, 'bg-white': !theme }"
                >
                  <template slot="header">
                    <div class="">
                      <a>
                        <img
                          class="img rounded"
                          :src="'https:' + i.headshot_image"
                        />
                      </a>
                    </div>
                  </template>
                  <template slot="body">
                    <h4
                      class="display-4 mb-0"
                      :class="{ 'text-white': theme, 'text-black': !theme }"
                    >
                      {{ i.name_text }}
                    </h4>
                    <p
                      class="lead h6"
                      :class="{ 'text-white': theme, 'text-black': !theme }"
                    >
                      {{ i.title_text }}
                    </p>
                    <a
                      :href="'mailto:' + i.email_text"
                      target="=_blank"
                      class="text-success"
                      >{{ i.email_text }}</a
                    >
                    <div class="table-responsive"></div>
                  </template>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  computed: {
    squad() {
      return this.$store.state.lilbig.team;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  created() {
    this.$store.dispatch("lilbig/fetchTeam");
  }
};
</script>
<style type="scss">
video {
  object-fit: cover !important;
  width: 100vw !important;
  height: 60vh !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
}
.viewport-header {
  position: relative !important;
  height: 25% !important;
  text-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
</style>
