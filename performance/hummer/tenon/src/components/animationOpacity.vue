<template>
  <view class="opacity-animation-wrapper" v-animation="keyframeAnimation">
    <text v-if="index > -1" style="text-align: center">{{ index }}</text>
  </view>
</template>

<script>
export default {
  name: "AnimationOpacity",
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
              opacity: 0,
            },
            percent: 0,
          },
          {
            styles: {
              opacity: 0.33,
            },
            percent: 0.33,
          },
          {
            styles: {
              opacity: 0.66,
            },
            percent: 0.66,
          },
          {
            styles: {
              opacity: 1,
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
.opacity-animation-wrapper {
  width: 34;
  height: 34;
  margin: 6;
  background-color: #15d0b4;
}
</style>
