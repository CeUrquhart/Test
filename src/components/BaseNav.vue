<template>
  <nav
    class="navbar"
    :class="[
      { 'navbar-expand-lg': expand },
      { [`navbar-${effect}`]: effect },
      { 'navbar-transparent': transparent },
      { rounded: round }
    ]"
  >
    <div class="container">
      <slot name="conainer-pre"></slot>
      <slot name="brand">
        <a class="navbar-brand" @click="navHome">
          <div class="">
            <img
              v-if="isMob"
              src="https://s3.amazonaws.com/appforest_uf/f1611627597940x381168473410042000/brain.png"
              width="17%"
              class="pb-0"
            />
          </div>
        </a>
      </slot>

      <navbar-toggle-button
        :toggled="toggled"
        :target="contentId"
        @click.native.stop="togNav"
      >
      </navbar-toggle-button>

      <slot name="container-after"></slot>

      <div
        class="collapse navbar-collapse"
        :class="{ show: toggled }"
        :id="contentId"
        v-click-outside="closeMenu"
      >
        <div class="navbar-collapse-header">
          <slot name="content-header" :close-menu="closeMenu"></slot>
        </div>
        <slot :close-menu="closeMenu"></slot>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "./NavbarToggleButton";

export default {
  name: "base-nav",
  components: {
    NavbarToggleButton
  },
  props: {
    title: {
      type: String,
      default: "",
      description: "Title of navbar"
    },
    effect: {
      type: String,
      default: "dark",
      description: "Effect of the navbar (light/dark)"
    },
    round: {
      type: Boolean,
      default: false,
      description: "Whether navbar has rounded corners"
    },
    transparent: {
      type: Boolean,
      default: false,
      description: "Whether navbar is transparent"
    },
    expand: {
      type: Boolean,
      default: false,
      description: "Whether navbar should contain 'navbar-expand-lg' class"
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description: "Id for menu"
    }
  },
  data() {
    return {
      toggled: false,
      windowWidth: window.innerWidth,
      show: false
    };
  },
  computed: {
    popNav() {
      return this.$store.state.lilbig.popNav;
    },
    isMob() {
      return this.windowWidth < 600;
    },
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  methods: {
    onTitleClick(evt) {
      this.$emit("title-click", evt);
    },
    closeMenu() {
      //this.$store.dispatch("lilbig/togglePopNav");
      this.toggled = false;
    },
    togNav() {
      this.$store.dispatch("lilbig/togglePopNav");
    },
    navHome() {
      this.$router.push({ path: "/" });
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth < 600) {
        this.show = true;
      } else {
        this.show = false;
      }
    };
  }
};
</script>
<style></style>
