<template>
  <view class="scale-animation-wrapper" v-animation="keyframeAnimation">
    <text v-if="index > -1" style="text-align: center">{{ index }}</text>
  </view>
</template>

<script>
export default {
  name: "AnimationScale",
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
              scale: 1,
            },
            percent: 0,
          },
          {
            styles: {
              scale: 1.4,
            },
            percent: 0.33,
          },
          {
            styles: {
              scale: 0.6,
            },
            percent: 0.66,
          },
          {
            styles: {
              scale: 1,
            },
            percent: 1,
          }
        ],
        onEnd: () => {},
        onStart: () => {},
      },
    };
  }
};
</script>

<style scoped>
.scale-animation-wrapper {
  width: 34;
  height: 34;
  margin: 6;
  background-color: #15d0b4;
}
</style>
