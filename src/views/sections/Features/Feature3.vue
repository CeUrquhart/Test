<template>
  <div
    class="section features-3 my-5"
    :class="{ 'bg-white': !theme, 'bg-primary': theme }"
  >
    <div class="container">
      <div class="row text-center justify-content-center">
        <div class="col-lg-8">
          <h3 class="display-3 text-white">
            Build something great
          </h3>
        </div>
      </div>
      <div class="row row-grid mt-5 p-2">
        <div class="col-lg-6">
          <div class="info info-horizontal bg-white">
            <div
              class="icon icon-shape icon-shape-info rounded-circle text-white"
            >
              <i class="ni ni-hat-3 text-info"></i>
            </div>
            <div class="description pl-4">
              <h5 class="title text-info">
                Rapid Development
              </h5>
              <p>
                We define the fastest possible roadmap to execution and
                determine the most vital points in the process.
              </p>
              <a href="javascript:void(0)" class="text-info">Learn more</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="info info-horizontal bg-white">
            <div
              class="icon icon-shape icon-shape-warning rounded-circle text-white"
            >
              <i class="ni ni-istanbul text-warning"></i>
            </div>
            <div class="description pl-4">
              <h5 class="title text-warning">Modern Interface</h5>
              <p>
                We use data & creative workshops to create the best interface
                for your platform's users to interact with.
              </p>
              <a href="javascript:void(0)" class="text-warning">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-grid">
        <div class="col-lg-6">
          <div class="info info-horizontal bg-white">
            <div
              class="icon icon-shape icon-shape-danger rounded-circle text-white"
            >
              <i class="ni ni-trophy text-danger"></i>
            </div>
            <div class="description pl-4">
              <h5 class="title text-danger">Great Features</h5>
              <p>
                Your features are determined & designed by you. We faciliate
                everything inbetween to make this come to life.
              </p>
              <a href="javascript:void(0)" class="text-danger">Learn more</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="info info-horizontal bg-white">
            <div
              class="icon icon-shape icon-shape-success rounded-circle text-white"
            >
              <i class="ni ni-image text-success"></i>
            </div>
            <div class="description pl-4">
              <h5 class="title text-success">Awesome Support</h5>
              <p>
                Communication is key, so we make ourselfves avaliable at anytime
                to answer questions, solve probelems and even just brainstorm.
              </p>
              <a href="javascript:void(0)" class="text-success">Learn more</a>
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
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  }
};
</script>
<style></style>
