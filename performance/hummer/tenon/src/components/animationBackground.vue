<template>
  <view class="background-animation-wrapper" v-animation="keyframeAnimation">
    <text v-if="index > -1" style="text-align: center">{{ index }}</text>
  </view>
</template>

<script>
export default {
  name: "AnimationBackground",
  props: {
    index: {
      type: Number,
      default: -1
    }
  },
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
