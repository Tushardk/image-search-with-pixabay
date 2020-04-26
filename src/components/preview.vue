<template>
  <div id="preview">
    <span id="prev" @click="prev">&lt;</span>
    <div id="preview-image">
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        alt
        ref="preview"
      />
    </div>
    <span id="next" @click="next">&gt;</span>
    <div id="preview-loader" v-if="previewloading">
      <div id="loader">
        <div class="lds-hourglass"></div>
      </div>
    </div>
  </div>
</template>

<script>
import loadpreview from "../mixins/loadpreview";
export default {
  name: "preview",
  data() {
    return {};
  },
  mixins: [loadpreview],
  computed: {
    currentpreview() {
      return this.$store.getters.currentpreview;
    },
    currentpreviewindex() {
      return this.$store.getters.currentpreviewindex;
    },
    previewloading() {
      return this.$store.getters.previewloading;
    }
  },
  methods: {
    prev: function() {
      this.$store.dispatch("currentpreview", [
        this.currentpreviewindex - 1,
        "prev"
      ]);
    },
    next: function() {
      this.$store.dispatch("currentpreview", [
        this.currentpreviewindex + 1,
        "next"
      ]);
    }
  },
  watch: {
    currentpreview() {
      let self = this;
      this.$store.dispatch("previewloading", true);
      this.$refs.preview.src = this.currentpreview;
      this.$refs.preview.onload = function() {
        self.$store.dispatch("previewloading", false);
      };
    }
  }
};
</script>
<style scoped>
#app-body {
  display: flex;
}

#search-result {
  flex: 3;
}

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
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
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