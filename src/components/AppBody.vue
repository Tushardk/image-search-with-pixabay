<template>
  <div id="app-body">
      <SearchBar />
      <Preview />
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import Preview from "./Preview";

export default {
  name: "AppBody",
  components: {
    SearchBar,
    Preview
  },
  methods: {

  }
};
</script>
<style scoped>
#app-body {
  display: flex;
  padding: 20px;
}

#search-result {
  flex: 3;
}

#preview {
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
}
#preview #preview-image {
  flex: 8;
}
#preview #preview-image img {
  width: 500px;
  height: 500px;
}
#preview #prev,
#preview #next {
  font-size: 100px;
  cursor: pointer;
  flex: 1;
}
</style>