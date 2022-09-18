import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    temporaryList: [],
    userDetails: {},
    repoDetails: [],
    isUserPage: false
  },
  getters: {
    temporaryList: state => state.temporaryList,
    list: state => state.list,
    getUserDetails: state => state.userDetails,
    getRepoList: state => state.repoDetails,
    isUserPage: state => state.isUserPage
  },
  mutations: {
    setList(state, payload) {
      state.list = payload
    },
    settemporaryList(state, payload) {
      state.temporaryList = payload
    },
    setuserDetails(state, payload) {
      state.userDetails = payload
    },
    setrepoDetails(state, payload) {
      state.repoDetails = payload;
    },
    setPage(state, payload) {
      state.isUserPage = payload;
    },
  },
  actions: {
    getList({ commit }) {
      axios.get('https://api.github.com/users?per_page=20').then((res) => {
        commit('setList', res.data)
        commit('settemporaryList', res.data)
      })
    },
    fetchUserDetails({ commit }, payload) {
      axios.get(`https://api.github.com/users/${payload}`).then((res) => {
        commit('setuserDetails', res.data)
      })
    },
    fetchRepos({ commit }, payload) {
      axios.get(`https://api.github.com/users/${payload}/repos`).then((res) => {
        commit('setrepoDetails', res.data)
      })
    },
    filterResult({ commit, state }, payload) {
      if (payload == '') {
        commit('settemporaryList', state.list)
      } else {
        var list = state.list;
        var newlist = []
        list.forEach((item) => {
          if (item.login.startsWith(payload)) {
            newlist.push(item)
          }
        })

        commit('settemporaryList', newlist)
      }
    },
    setUserPage({ commit }, payload) {
      commit('setPage', payload)
    }
  },
  modules: {
  }
})
