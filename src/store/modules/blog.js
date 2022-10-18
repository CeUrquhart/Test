import axios from "axios";
import router from "../../router";

export default {
  namespaced: true,
  state: {
    feed: null,
    blog: null,
    toolz: null,
    baseURL: "https://go.lilbigdata.com/version-test/api/1.1/"
  },
  getters: {},
  mutations: {
    setBlogFeed(state, feed) {
      state.feed = feed;
    },
    setBlog(state, blog) {
      state.blog = blog;
    },
    setToolz(state, toolz) {
      state.toolz = toolz;
    }
  },
  actions: {
    fetchToolz({ state, commit }) {
      axios
        .post(
          state.baseURL + "wf/toolz",
          {},
          {
            headers: {
              Authorization: "Bearer 25672671000dd6c34d076bdd2bd42a3b"
            }
          }
        )
        .then(res => {
          const toolz = res.data.response.data;
          commit("setToolz", toolz);
          return state.toolz;
        })
        .catch(e => {
          return e;
        });
    },
    fetchBlogs({ state, commit }) {
      axios
        .post(
          state.baseURL + "wf/blogfeed",
          {},
          {
            headers: {
              Authorization: "Bearer 25672671000dd6c34d076bdd2bd42a3b"
            }
          }
        )
        .then(res => {
          const data = res.data.response.data;
          const feed = [];
          for (let key in data) {
            const item = data[key];
            if (item.published_boolean) {
              feed.push(item);
            }
          }
          commit("setBlogFeed", feed);
          return state.feed;
        })
        .catch(e => {
          return e;
        });
    },
    setBlog({ commit, state }, id) {
      axios
        .post("https://go.lilbigdata.com/version-test/api/1.1/wf/blog?id=" + id)
        .then(res => {
          const blog = res.data.response.blog;
          blog.sects = res.data.response.data;
          commit("setBlog", blog);

          localStorage.setItem("content", state.blog._id);
          router.push({ path: "/content/" + state.blog.slug_text });
          return state.blog;
        });
    }
  }
};
