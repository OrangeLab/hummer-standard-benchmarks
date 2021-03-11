<template>
  <view class="rotate-animation-wrapper" v-animation="keyframeAnimation">
  </view>
</template>

<script>
export default {
  name: "AnimationRotate",
  data() {
    return {
      keyframeAnimation: {
        duration: 2000,
        repeatCount: -1,
        easing: "linear",
        keyframes: [
          {
            styles: {
              rotationZ: 0
            },
            percent: 0,
          },
          {
            styles: {
              rotationZ: 360
            },
            percent: 0.5,
          },
          {
            styles: {
              rotationZ: 0
            },
            percent: 1,
          }
        ],
        onEnd: () => {},
        onStart: () => {}
      },
    };
  }
};
</script>

<style scoped>
.rotate-animation-wrapper {
  width: 34;
  height: 34;
  margin: 6;
  background-color: #15d0b4;
}
</style>
