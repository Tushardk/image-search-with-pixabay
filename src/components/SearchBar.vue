<template>
  <div id="search-result">
    <div id="search">
      <input type="text" id="search-bar" ref="searchterm" value="trains" @keyup.enter="searchApi" />
      <button id="search-button" @click="searchApi">Search</button>
    </div>
    <div id="result">
      <template id="success" v-if="this.didFoundSearchResult">
        <div
          v-for="(item,index) in this.searchResult"
          :key="item.id"
          class="thumbnail"
          :data-div-index="index+1"
        >
          <img
            :src="item.previewURL"
            :data-img-index="index"
            @click="setPreviewImageUrlIndex(index)"
          />
        </div>
      </template>
      <div id="failure" v-else>No Result Found</div>
      <Loader v-if="this.searchLoader" />
    </div>
  </div>
</template>

<script>
import Loader from "./Loader";
export default {
  name: "SearchBar",
  components: {
    Loader,
  },
  data() {
    return {
      apikey: "15730940-7551094251995cb8e814b5f55",
    };
  },
  mounted() {
    this.searchApi();
  },
  computed: {
    didFoundSearchResult() {
      if (this.$store.getters.searchResult.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    searchResult() {
      return this.$store.getters.searchResult;
    },
    searchLoader() {
      return this.$store.getters.searchLoader;
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

      this.$store.dispatch("searchResult", searchUrl);
    },
    setPreviewImageUrlIndex: function (index) {
      this.$store.dispatch("previewImageUrlIndex", index);
    },
  },
};
</script>
<style lang="scss" scoped>
#search-result {
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