<template>
  <div>
    <div class="embed-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Jx2si_NsFfQ?autoplay=1&mute=1"
        frameborder="0"
        allow="autoplay"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
