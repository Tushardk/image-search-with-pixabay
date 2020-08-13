<template>
  <div id="preview">
    <span id="prev" @click="prev">&lt;</span>
    <div id="preview-image">
      <img :src="this.previewImageUrl" ref="imgTag" />
    </div>
    <span id="next" @click="next">&gt;</span>
    <div id="preview-loader" v-if="this.previewLoader">
      <div class="lds-hourglass"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  data() {
    return {};
  },
  mounted() {
    this.$refs.imgTag.addEventListener("load", () =>
      this.$store.commit("previewLoader", false)
    );
  },
  computed: {
    previewImageUrl() {
      return this.$store.getters.previewImageUrl;
    },
    previewImageUrlIndex() {
      return this.$store.getters.previewImageUrlIndex;
    },
    previewLoader() {
      return this.$store.getters.previewLoader;
    },
  },
  methods: {
    prev: function () {
      if (this.previewImageUrlIndex - 1 > -1) {
        this.$store.dispatch(
          "previewImageUrlIndex",
          this.previewImageUrlIndex - 1
        );
      } else {
        console.log("No Previous");
      }
    },
    next: function () {
      if (this.previewImageUrlIndex + 1 < 20) {
        this.$store.dispatch(
          "previewImageUrlIndex",
          this.previewImageUrlIndex + 1
        );
      } else {
        console.log("No Next");
      }
    },
  },
};
</script>
<style scoped>
#preview {
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
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

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  background-color: darkseagreen;
  border-radius: 10em;
  padding: 24px;
}
#preview-loader {
  position: absolute;
  top: 0;
  left: 25%;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #333;
  border-color: #333 transparent #333 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>