<template>
  <div id="app-body">
      <searchbar />
      <preview />
  </div>
</template>

<script>
import searchbar from "./search-bar";
import preview from "./preview";

export default {
  name: "app-body",
  components: {
    searchbar,
    preview
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