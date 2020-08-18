<template>
  <div class="search-result">
    <div id="search">
      <input type="text" id="search-bar" ref="searchterm" value="hills" @keyup.enter="searchApi" />
      <button id="search-button" @click="searchApi">Search</button>
    </div>
    <div id="result">
      <template id="success" v-if="this.didFoundResults">
        <div
          v-for="(item,index) in this.searchResultDataHits"
          :key="item.id"
          class="thumbnail"
          :data-div-index="index+1"
        >
          <img
            :src="item.previewURL"
            :data-img-index="index"
            @click="setPreviewImageUrlIndex(index, $event)"
          />
        </div>
      </template>
      <div id="failure" v-else>No Result Found, Please try some appropriate search term...</div>
      <Loader v-if="this.searchLoader" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "./Loader";
export default {
  name: "SearchBar",
  props: ["name"],
  components: {
    Loader,
  },
  data() {
    return {
      apikey: "15730940-7551094251995cb8e814b5f55",
      searchLoader: false,
      didFoundResults: false,
    };
  },
  mounted() {
    (this.didFoundResults = true), this.searchApi();

    this.$root.$on("addVisitedClass", (e) => {
      let largeImageURL = e.path[0]["currentSrc"];
      for (let result in this.searchResultDataHits) {
        if (
          this.searchResultDataHits[result]["largeImageURL"] === largeImageURL
        ) {
          let imgElm = document.querySelector(`[data-img-index="${result}"]`);
          imgElm.classList.add("visited");
        }
      }
    });
  },
  computed: {
    searchResultDataHits() {
      return this.$store.getters.searchResultData.hits;
    },
  },

  methods: {
    searchApi: function () {
      let baseurl = "https://pixabay.com/api/?key=";
      let searchterm = "&q=" + this.$refs.searchterm.value;
      let safesearch = "&safesearch=true";
      let min_width = "&min_width=200px";
      let min_height = "&min_height=200px";
      let searchUrl =
        baseurl +
        this.apikey +
        searchterm +
        min_width +
        min_height +
        safesearch;

      this.searchResult(searchUrl);
    },
    searchResult: function (searchUrl) {
      this.searchLoader = true;
      axios
        .get(searchUrl)
        .then((data) => {
          if (data.data.total > 0) {
            this.didFoundResults = true;
            this.$store.dispatch("searchResultData", data.data);
            this.$root.$emit("previewImageIndex", 0, false);
          } else {
            this.didFoundResults = false;
            this.$store.dispatch("clearsearchResultData", data.data);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.searchLoader = false;
        });
    },
    setPreviewImageUrlIndex: function (index, event) {
      let classes = Array.from(event.target.classList);
      let isVisitedThumbnail =
        classes.indexOf("visited") === -1
          ? event.target.classList.add("visited")
          : true;

      this.$root.$emit("previewImageIndex", index, isVisitedThumbnail);
    },
  },
};
</script>
<style lang="scss" scoped>
.search-result {
  #search {
    #search-bar {
      padding: 4px;
      height: 20px;
      font-size: 20px;
      font-weight: bold;
      color: #333333;
    }
    #search-button {
      padding: 20px;
      font-size: 20px;
      font-weight: bold;

      display: inline-block;
      padding: 2px 10px;
      border: 0.1em solid #000000;
      margin: 0 4px;
      border-radius: 0.12em;
      box-sizing: border-box;
      text-decoration: none;
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      color: #000000;
      background: #42cc8c;
      text-align: center;
      transition: all 0.15s;
      cursor: pointer;
    }
    #search-button:hover {
      text-shadow: 0 0 2em rgba(255, 255, 255, 1);
      color: #ffffff;
      border-color: #ffffff;
    }
  }

  #result {
    position: relative;
    flex-wrap: wrap;
    padding: 20px;
    align-items: flex-end;
    justify-content: center;

    .thumbnail {
      width: 80px;
      height: 80px;
      min-width: 80px;
      min-height: 80px;
      max-width: 80px;
      max-height: 80px;
      display: inline-block;
      overflow: hidden;
    }
    #failure {
      font-size: 24px;
      padding: 40px 60px;
      line-height: 150%;
      color: brown;
    }
    div img {
      width: 80px;
      height: 80px;
      cursor: pointer;
      transition: width 1s, height 1s;
    }
    div img:hover {
      width: 90px;
      height: 90px;
      transition: width 1s, height 1s;
    }
  }
}
</style>