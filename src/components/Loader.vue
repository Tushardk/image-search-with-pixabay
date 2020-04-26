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
  top: 25vh;
  left: 25vw;
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2em;
  opacity: 0.5;
  border-radius: 50px;
  background: #333;
  box-shadow: 20px 20px 60px #008484, -20px -20px 60px #00b2b2;
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
