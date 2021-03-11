<template>
  <view class="background-animation-wrapper" v-animation="keyframeAnimation">
  </view>
</template>

<script>
export default {
  name: "AnimationBackground",
  data() {
    return {
      keyframeAnimation: {
        duration: 2000,
        repeatCount: -1,
        easing: "linear",
        keyframes: [
          {
            styles: {
              backgroundColor: "#4A90E2",
            },
            percent: 0,
          },
          {
            styles: {
              backgroundColor: "#8484FF",
            },
            percent: 0.33,
          },
          {
            styles: {
              backgroundColor: "#F1CA19",
            },
            percent: 0.66,
          },
          {
            styles: {
              backgroundColor: "#4A90E2",
            },
            percent: 1,
          }
        ],
        onEnd: () => {},
        onStart: () => {},
      }
    }
  }
};
</script>

<style scoped>
.background-animation-wrapper {
  width: 34;
  height: 34;
  margin: 6;
  background-color: #15d0b4;
}
</style>
