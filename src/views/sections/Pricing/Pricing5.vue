<template>
  <div class="pricing-5" id="pricing-6">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3
            class="display-3 mt-3"
            :class="{ 'text-black': !theme, 'text-white': theme }"
          >
            Choose a plan for your next project
          </h3>
          <tabs
            v-model="pricing5Tab"
            pills
            type="success"
            class="my-4"
            no-content-space
          >
            <tab-pane label="Expensive"></tab-pane>
            <tab-pane label="Cheaper"></tab-pane>
          </tabs>
          <p
            class="lead mt-0"
            :class="{ 'text-black': !theme, 'text-white': theme }"
          >
            Pitch us your plan, and we'll help you break it down to the minimum.
          </p>
        </div>
        <div class="col-md-7 ml-auto mr-auto">
          <div class="tab-content tab-space">
            <div
              v-if="pricing5Tab === 'Expensive'"
              class="tab-pane active"
              id="personal"
            >
              <div class="row">
                <div class="col-md-6" v-for="(i, index) in racks" :key="index">
                  <card
                    class="card-pricing text-center"
                    type=""
                    headerClasses="bg-transparent"
                    footerClasses="bg-transparent"
                  >
                    <template slot="header">
                      <h6 class="text-uppercase ls-1 py-3 mb-0">
                        {{ i.title }}
                      </h6>
                    </template>
                    <template slot="body">
                      <div class="display-2">${{ i.base }}</div>
                      <span>{{ i.freq }}</span>
                      <ul class="list-unstyled my-4">
                        <li
                          class="align-items-center"
                          v-for="(o, index) in i.callouts"
                          :key="index"
                        >
                          <span>{{ o }}</span>
                        </li>
                      </ul>
                    </template>
                    <template slot="footer">
                      <a @click="reqDemo" class="text-primary"
                        >Request a demo</a
                      >
                    </template>
                  </card>
                </div>
              </div>
            </div>
            <div v-else class="tab-pane active" id="personal">
              <div class="row">
                <div class="col-md-6" v-for="(i, index) in specs" :key="index">
                  <card
                    class="card-pricing text-center"
                    type=""
                    headerClasses="bg-transparent"
                    footerClasses="bg-transparent"
                  >
                    <template slot="header">
                      <h6 class="text-uppercase ls-1 py-3 mb-0">
                        {{ i.title }}
                      </h6>
                    </template>
                    <template slot="body">
                      <div class="display-2">${{ i.base }}</div>
                      <span>{{ i.freq }}</span>
                      <ul class="list-unstyled my-4">
                        <li
                          class="align-items-center"
                          v-for="(o, index) in i.callouts"
                          :key="index"
                        >
                          <span>{{ o }}</span>
                        </li>
                      </ul>
                    </template>
                    <template slot="footer">
                      <a @click="reqDemo" class="text-primary"
                        >Request a demo</a
                      >
                    </template>
                  </card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  },
  data() {
    return {
      pricing5Tab: "Expensive",
      specs: [
        {
          id: 0,
          title: "Prototype",
          desc:
            "We usually kick off our collaborations by building a prototype to see if we like each other and find out how your project should be built. If you don’t have faith in us after this, we’re happy to refund the costs.",
          base: 2000,
          freq: "One-Time Fee",
          callouts: [
            "Two Week Delivery",
            "Fully interactive prototype",
            "Documentation & Data Models for Development."
          ]
        },
        {
          id: 1,
          title: "Product Launch",
          desc:
            "Working with a strict timeline? Collaborate with us for four weeks to quickly define what to build, design something great and get a fully functioning product ready for launch within a few weeks.",
          base: 15000,
          freq: "On Average",
          callouts: [
            "Custom Project Roadmap",
            "Full Stack Development",
            "Exactly the right features to validate what you’re doing."
          ]
        }
      ],
      racks: [
        {
          id: 0,
          title: "Migration",
          desc:
            "Take your product to the next level. We will help you migrate or implmement your product in any time of code solutoin you need.",
          base: 8000,
          freq: "One-Time Fee",
          callouts: ["No-Code to Code", "Backend Development", "UI Update"]
        },
        {
          id: 1,
          title: "Platform",
          desc:
            "Create your app for any device or all devlices. We will set your tech ecosystem up to grow alongside your business model.",
          base: 20000,
          freq: "On Average",
          callouts: ["Web App", "Native iOS & Android", "Native Desktop"]
        }
      ]
    };
  },
  computed: {
    theme() {
      return this.$store.state.lilbig.nightMode;
    }
  },
  methods: {
    reqDemo() {
      this.$store.commit("deez/coldHeader");
      this.$router.push({ path: "/#main" });
    }
  }
};
</script>
<style></style>
