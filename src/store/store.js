import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        searchResult: [],
        searchLoader: false,
        previewLoader: false,
        previewImageUrl: "",
        previewImageUrlIndex: 0
    },
    getters: {
        searchResult: state => state.searchResult,
        searchLoader: state => state.searchLoader,
        previewLoader: state => state.previewLoader,
        previewImageUrl: state => state.previewImageUrl,
        previewImageUrlIndex: state => state.previewImageUrlIndex
    },
    mutations: {
        clearSearchResult(state, payload) {
            state.searchResult = payload.data.hits;
        },
        searchResult(state, payload) {
            state.searchResult = payload.data.hits;
        },
        searchLoader(state, payload) {
            state.searchLoader = payload
        },
        previewLoader(state, payload) {
            state.previewLoader = payload
        },
        previewImageUrl(state, payload) {
            state.previewImageUrl = payload
        },
        previewImageUrlIndex(state, payload) {
            state.previewImageUrlIndex = payload
            state.previewImageUrl = state.searchResult[payload].largeImageURL;
        }
    },
    actions: {
        searchResult(context, payload) {
            context.commit("searchLoader", true);
            axios
                .get(payload)
                .then((data) => {
                    if (data.data.total > 0) {
                        context.commit('searchResult', data);
                        context.commit('previewImageUrlIndex', 0);
                    } else {
                        context.commit('clearSearchResult', data)
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    context.commit("searchLoader", false);
                });

        },
        previewImageUrlIndex(context, payload) {
            context.commit("previewLoader", true);
            context.commit('previewImageUrlIndex', payload);
        }
    }
})

export default store
