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
  data() {
    return {
      a: 1,
    };
  },
  components: {
    SearchBar,
    Preview,
  },
};
</script>
<style lang="scss" scoped>
#app-body {
  display: flex;
  padding: 20px;

  .search-result {
    flex: 3;
  }

  .preview {
    flex: 7;
  }
}
</style>