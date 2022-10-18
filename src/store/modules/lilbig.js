import axios from "axios";
import router from "../../router.js";

export default {
  namespaced: true,
  state: {
    nightMode: true,
    baseURL: "https://go.lilbigdata.com/version-test/api/1.1",
    popNav: false,
    team: null,
    clients: null,
    services: null,
    servicePage: null,
    lbd: "Services"
  },
  getters: {},
  mutations: {
    setLbd(state, payload) {
      state.lbd = payload;
    },
    nightModeOn(state) {
      state.nightMode = true;
    },
    nightModeOff(state) {
      state.nightMode = false;
    },
    showPopNav(state) {
      state.popNav = true;
    },
    hidePopNav(state) {
      state.popNav = false;
    },
    setTeam(state, team) {
      state.team = team;
    },
    setClients(state, clients) {
      state.clients = clients;
    },
    setServices(state, services) {
      state.services = services;
    },
    setServicePage(state, service) {
      state.servicePage = service;
    }
  },
  actions: {
    fetchServiceById({ state, commit }, id) {
      axios
        .post(state.baseURL + "/wf/getcatalog?id=" + id)
        .then(res => {
          const service = res.data.response;
          commit("setServicePage", service);
          commit("setLbd", service.data.name_text);
          router.push({ path: "/service/" + service.data.slug_text });
          localStorage.setItem("slug", service.data.slug_text);
          localStorage.setItem("id", service.data._id);
          return state.servicePage;
        })
        .catch(e => {
          alert(e);
        })
        .finally(() => {
          // router.push({ path: "/service-page" });
        });
    },
    toggleNightMode({ state, commit }) {
      if (state.nightMode) {
        commit("nightModeOff");
      } else {
        commit("nightModeOn");
      }
    },
    togglePopNav({ state, commit }) {
      if (state.popNav) {
        commit("hidePopNav");
        var audio = new Audio(
          "https://s3.amazonaws.com/appforest_uf/f1611716047183x944967986622543400/woosh.mp3"
        );
        audio.play();
      } else {
        commit("showPopNav");
        var audioin = new Audio(
          "https://s3.amazonaws.com/appforest_uf/f1611716047183x944967986622543400/woosh.mp3"
        );
        audioin.play();
      }
    },
    fetchTeam({ state, commit }) {
      axios
        .post("https://go.lilbigdata.com/version-test/api/1.1/wf/squad", {
          headers: {
            Authorization: "Bearer 25672671000dd6c34d076bdd2bd42a3b"
          }
        })
        .then(res => {
          const team = res.data.response.data;

          commit("setTeam", team);
          return state.team;
        });
    },
    fetchClients({ state, commit }) {
      axios
        .post(state.baseURL + "/wf/clients", {
          headers: {
            Authorization: "Bearer 25672671000dd6c34d076bdd2bd42a3b"
          }
        })
        .then(res => {
          const clients = res.data.response.data;
          //alert(JSON.stringify(clients));
          commit("setClients", clients);
          return state.clients;
        });
    },
    fetchServices({ state, commit }) {
      axios
        .post("https://go.lilbigdata.com/version-test/api/1.1/wf/catalog", {
          headers: {
            Authorization: "Bearer 25672671000dd6c34d076bdd2bd42a3b"
          }
        })
        .then(res => {
          const services = res.data.response.data;
          //alert(JSON.stringify(services));
          commit("setServices", services);
          return state.services;
        });
    }
  }
};
