<template>
  <div id="loaderCont">
    <div id="loader">
      <div class="lds-hourglass"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#loaderCont {
  position: absolute;
  top: 118px;
  left: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2em;
  z-index: 1;
  background-color: darkseagreen;
  border-radius: 10em;
  padding: 24px;
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
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
