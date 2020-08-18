<template>
  <div class="preview">
    <div class="prev-link-error">
      <div class="prev" @click="prev">&lt;</div>
      <div
        class="noPrevError"
        :class="this.prevErrorVisibility?'visible':'hidden'"
      >This is first image</div>
    </div>

    <div class="preview-image">
      <img :src="this.previewImageUrl" ref="imgTag" />
    </div>

    <div class="next-link-error">
      <div class="next" @click="next">&gt;</div>
      <div
        class="noNextError"
        :class="this.nextErrorVisibility?'visible':'hidden'"
      >This is last image</div>
    </div>

    <div class="preview-loader" v-if="this.previewLoader">
      <div class="lds-hourglass"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  props: {},
  data() {
    return {
      previewLoader: false,
      previewImageUrl: "",
      previewImageIndex: 0,
      prevErrorVisibility: false,
      nextErrorVisibility: false,
    };
  },
  computed: {
    searchResultDataHits() {
      return this.$store.getters.searchResultData.hits;
    },
  },

  mounted() {
    this.$refs.imgTag.addEventListener("load", (e) => {
      this.$root.$emit("addVisitedClass", e);
      this.previewLoader = false;
    });

    this.$root.$on("previewImageIndex", (index, isVisitedThumbnail) => {
      if (isVisitedThumbnail === undefined) {
        this.previewLoader = true;
      }
      this.previewImageIndex = index;
      this.previewImageUrl = this.searchResultDataHits[index]["largeImageURL"];
    });
  },
  methods: {
    // Previous Link
    prev: function () {
      if (this.previewImageIndex - 1 > -1) {
        this.previewLoader = true;
        this.previewImageIndex--;
        this.previewImageUrl = this.searchResultDataHits[
          this.previewImageIndex
        ]["largeImageURL"];
      } else {
        this.prevErrorVisibility = true;
        setTimeout(() => {
          this.prevErrorVisibility = false;
        }, 1000);
      }
    },

    // Next Link
    next: function () {
      if (this.previewImageIndex + 1 < 20) {
        this.previewLoader = true;
        this.previewImageIndex++;
        this.previewImageUrl = this.searchResultDataHits[
          this.previewImageIndex
        ]["largeImageURL"];
      } else {
        this.nextErrorVisibility = true;
        setTimeout(() => {
          this.nextErrorVisibility = false;
        }, 1000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.preview {
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  .preview-image {
    flex: 8;
    img {
      width: 500px;
      height: 500px;
    }
  }
  .prev-link-error,
  .next-link-error {
    font-size: 100px;
    cursor: pointer;
    flex: 1;
    .noPrevError,
    .noNextError {
      font-size: 20px;
      color: brown;
      font-weight: bold;
    }
  }
  .preview-loader {
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .visible {
    visibility: visible;
  }
  .hidden {
    visibility: hidden;
  }
}
</style>