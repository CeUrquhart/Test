<template>
  <div
    :class="{ 'bg-primary': theme, 'bg-white': !theme }"
    class="p-4 "
    id="main"
  >
    <Confetti></Confetti>

    <div style="height: 100px;"></div>
    <base-alert :msg="message" v-if="alert"></base-alert>
    <div class="container p-4">
      <div class="row align-items-center text-left">
        <div class="col-lg-6 ">
          <h2
            style="font-size: 52px;"
            :class="{ 'text-white': theme, 'text-black': !theme }"
          >
            lilBig(<span
              v-for="(l, index) in deez"
              :key="l.id"
              class="text-default"
            >
              <transition name="slide-fade"
                ><span v-if="deez[index].viz === true">{{
                  l.title
                }}</span></transition
              > </span
            >)
          </h2>
          <p
            v-if="!isMob"
            class="lead pb-0 "
            :class="{ 'text-white': theme, 'text-black': !theme }"
            style="font-size: 18px;"
          >
            LilBigData does not rely on a set system of tools, rather than we
            integrate into the tools already in use and build the rest with
            custom solutions tailored to
            <span class="text-success">your business</span> model.
          </p>
        </div>
        <div
          class="col-lg-6 p-5"
          style="box-shadow: inset 0px 0px 1px 1px black; border-radius: 15px;"
          :class="{ 'bg-primary': theme, 'bg-white': !theme }"
        >
          <form>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label>Your name</label>
                  <base-input
                    placeholder="First Name..."
                    style="background-color: transparent;"
                    inputClasses="bg-transparent"
                    v-model="model.name"
                  ></base-input>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col">
                <div class="form-group">
                  <label>Email address</label>
                  <base-input
                    placeholder="Email here..."
                    style="background-color: transparent;"
                    inputClasses="bg-transparent"
                    v-model="model.email"
                  ></base-input>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <div class="form-group bg-transparent">
                  <label>Company Name</label>
                  <base-input
                    placeholder="Company here..."
                    inputClasses="bg-transparent"
                    v-model="model.company"
                  ></base-input>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <base-button
                  @click="submit"
                  type="success"
                  class="text-center"
                  style="width: 100%;"
                  >Start Your Project</base-button
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- <PopNav /> -->
    <!-- <div style="height: 100px;"></div>
    <div style="height: 100px;"></div> -->
  </div>
</template>
<script>
//import PopNav from "@/components/PopNav";
import Confetti from "@/views//components/Confetti";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BaseAlert from "@/components/BaseAlert";
export default {
  components: {
    BaseAlert,
    Confetti,
    BaseButton,
    BaseInput
  },
  data() {
    return {
      alert: false,
      message: "Please enter valid information.",
      primary: this.$store.state.lilbig.nightMode,
      lbd: "Data",
      windowWidth: window.innerWidth,
      key: 0,
      model: {
        name: null,
        email: null,
        company: null
      },
      deez: [
        {
          id: 0,
          title: "Data",
          viz: true
        },
        {
          id: 1,
          title: "Ops",
          viz: false
        },
        {
          id: 2,
          title: "Leads",
          viz: false
        },
        {
          id: 3,
          title: "Sesh",
          viz: false
        }
      ]
    };
  },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    },
    isMob() {
      return this.windowWidth < 500;
    }
  },
  methods: {
    submit() {
      if (this.model.email) {
        const lead = this.model;
        this.$store.dispatch("deez/postLead", lead);
        this.model = {
          name: null,
          email: null,
          company: null
        };
        alert(
          "Your information has been recieved, one of our specialist will reach out to you soon."
        );
      } else {
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      }
    },
    playSound(url) {
      var audio = new Audio(url);
      audio.play();
    },
    toggleNav() {
      this.$store.dispatch("lilbig/togglePopNav");
    },
    toggleTheme() {
      this.$store.dispatch("lilbig/toggleNightMode");
    },
    handle(value) {
      this.nextPlz(value);
    },
    nextPlz(value) {
      if (value < 3) {
        this.key = value + 1;
      } else {
        this.key = 0;
      }
      setTimeout(() => {
        this.deez[value].viz = false;
        this.deez[this.key].viz = true;
        this.handle(this.key);
      }, 3000);
    },
    fbgm() {
      this.deez[this.key].viz = true;
    }
  },
  watch: {
    primary: function(vnew) {
      this.toggleTheme();
      if (vnew) {
        this.playSound(
          "https://soundbible.com/mp3/Air%20Plane%20Ding-SoundBible.com-496729130.mp3"
        );
      } else {
        this.playSound(
          "https://s3.amazonaws.com/appforest_uf/f1611714023491x157500777026451380/Electronic_Chime-KevanGC-495939803.mp3"
        );
      }
    }
  },
  created() {
    const value = 0;
    this.nextPlz(value);
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>
<style scoped>
label {
  color: gray !important;
  font-size: 18px;
  text-transform: uppercase;
}

.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity 0.5s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.test {
  text-transform: capitalize;
}
.bb {
  border-bottom: 1px solid #cedcea;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s !important;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0 !important;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.1s ease !important;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1) !important;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px) !important;
  opacity: 0 !important;
}
</style>
