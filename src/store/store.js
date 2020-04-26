import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false,
        previewloading: false,
        results: null,
        currentpreview: "",
        currentpreviewindex: 0
    },
    getters: {
        results: state => state.results,
        loading: state => state.loading,
        previewloading: state => state.previewloading,
        currentpreview: state => state.currentpreview,
        currentpreviewindex: state => state.currentpreviewindex
    },
    mutations: {
        captureResult(state, payload) {
            state.results = payload
        },
        loading(state, payload) {
            state.loading = payload
        },
        previewloading(state, payload) {
            state.previewloading = payload
        },
        currentpreview(state, payload) {
            // console.log(payload)
            if (payload[1] === "first" || payload[1] === "direct") {
                state.currentpreviewindex = payload[0]
                state.currentpreview = state.results.data.hits[state.currentpreviewindex]["largeImageURL"]
            }
            else {
                if ((payload[0] >= 0 && payload[1] === "prev") || (payload[0] < 20 && payload[1] === "next")) {
                    state.currentpreviewindex = payload[0]
                    state.currentpreview = state.results.data.hits[state.currentpreviewindex]["largeImageURL"]
                } else {
                    if (payload[1] === "prev") {
                        console.log("No Prev")
                    } else {
                        console.log("No Next")
                    }
                }
            }
        },
        firstpreview(state, currentpreviewindex) {
            this.commit("currentpreview", [currentpreviewindex, 'first'])
        }
    },
    actions: {
        captureResult(context, payload) {
            context.commit('captureResult', payload)
        },
        loading(context, payload) {
            context.commit('loading', payload)
        },
        previewloading(context, payload) {
            context.commit('previewloading', payload)
        },
        currentpreview(context, payload) {
            context.commit('currentpreview', payload)
        },
        firstpreview(context, currentpreviewindex) {
            context.commit('firstpreview', currentpreviewindex)
        }
    }
})

export default store
