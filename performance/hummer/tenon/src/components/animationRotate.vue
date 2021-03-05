<template>
  <view class="rotate-animation-wrapper" v-animation="keyframeAnimation">
    <text v-if="index > -1" style="text-align: center">{{ index }}</text>
  </view>
</template>

<script>
export default {
  name: "AnimationRotate",
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
