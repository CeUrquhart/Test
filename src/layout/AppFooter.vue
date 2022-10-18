<template>
  <footer class="footer" :class="{ 'bg-primary': theme, 'bg-white': !theme }">
    <div class="container">
      <div class="row row-grid align-items-center mb-5">
        <div class="col-lg-6"></div>
        <div class="col-lg-6 text-lg-center btn-wrapper"></div>
      </div>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a href="javascript:void();" target="_blank" class="text-gray"
              >Lil Big Data</a
            >
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end"></ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  }
};
</script>
<style></style>
