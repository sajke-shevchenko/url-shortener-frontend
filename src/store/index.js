import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const api = 'http://localhost:8000/api/'

export default new Vuex.Store({
  state: {
    urls: [],
    pagination: {
      page: 1,
      per_page: 10,
    }
  },
  mutations: {
    SET_URLS (state, urls) {
      state.urls = urls;
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination
    }
  },
  actions: {
    /** Load all Urls **/
    async loadUrls() {
      const { data } = await axios.get(api + 'urls', { params: this.state.pagination });

      this.commit('SET_URLS', data.results);
      this.commit('SET_PAGINATION', data.pagination)

      return data.results;
    },
  },
})
