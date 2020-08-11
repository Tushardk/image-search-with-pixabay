<template>
  <div id="search-result">
    <div id="search">
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        ref="searchterm"
        value="hills"
        @keyup.enter="searchApi"
      />
      <button id="search-button" @click="searchApi">Search</button>
    </div>
    <div id="result" v-if="$store.getters.results">
      <div v-if="$store.getters.results.data.hits.length > 0">
        <span v-for="hit in $store.getters.results.data.hits" :key="hit.id">
          <img
            :src="hit.previewURL"
            :alt="hit.tags"
            :data-large-image-url="hit.largeImageURL"
            @click="loadpreview($store.getters.results.data.hits.indexOf(hit) , 'direct')"
          />
        </span>
      </div>
      <div v-else>Please enter appropriate search term</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import loadpreview from "../mixins/loadpreview";
export default {
  name: "search-bar",
  data() {
    return {
      apikey: "15730940-7551094251995cb8e814b5f55",
      errors: {}
    };
  },
  mixins: [loadpreview],
  mounted() {
    this.searchApi();
  },
  computed: {
    currentpreview() {
      return this.$store.getters.currentpreview;
    }
  },
  methods: {
    searchApi: function() {
      this.$store.commit("loading", true);
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
      axios.get(searchUrl).then(data => {
        this.$store.dispatch("captureResult", data);
        this.$store.dispatch("firstpreview", 0);
        this.$store.dispatch("loading", false);
      });
    }
  }
};
</script>
<style scoped>
#search-result {
}
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

#result {
  flex-wrap: wrap;
  padding: 20px;
  align-items: flex-end;
  justify-content: center;
}
#result span {
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  display: inline-block;
  overflow: hidden;
}
#result span img {
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: width 1s, height 1s;
}
#result span img:hover {
  width: 90px;
  height: 90px;
  transition: width 1s, height 1s;
}
</style>