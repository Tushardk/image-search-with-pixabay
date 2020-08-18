import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        searchResultData: [],
    },
    getters: {
        searchResultData: state => state.searchResultData,
    },
    mutations: {
        clearsearchResultData(state, payload) {
            state.searchResultData = payload;
        },
        searchResultData(state, payload) {
            state.searchResultData = payload;
        }
    },
    actions: {
        searchResultData(context, payload) {
            context.commit('searchResultData', payload);
        }
    }
})

export default store
