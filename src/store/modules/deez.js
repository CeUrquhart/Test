import axios from "axios";

export default {
  namespaced: true,
  state: {
    hotHeader: true,
    lead: null
  },
  getters: {},
  mutations: {
    warmHeader(state) {
      state.hotHeader = true;
    },
    coldHeader(state) {
      state.hotHeader = false;
    },
    setLead(state, lead) {
      state.lead = lead;
    }
  },
  actions: {
    toggleDaHeat({ commit, state }) {
      if (state.hotHeader) {
        commit("coldHeader");
      } else {
        commit("warmHeader");
      }
    },
    postLead({ state, commit }, lead) {
      axios
        .post("https://go.lilbigdata.com/version-test/api/1.1/wf/webLead", lead)
        .then(res => {
          const lead = res.data.response;
          commit("setLead", lead);
          return state.lead;
        })
        .catch(e => alert(e));
    },
    assetDownload({ commit }, formData) {
      axios
        .post(
          "https://go.lilbigdata.com/version-test/api/1.1/wf/asset_download",
          formData
        )
        .then(res => {
          const lead = res.data.response.data;
          commit("setLead", lead);
        })
        .catch(e => alert(e));
    }
  }
};
