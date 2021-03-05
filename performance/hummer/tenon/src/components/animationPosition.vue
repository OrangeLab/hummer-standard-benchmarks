<template>
  <view class="position-animation-wrapper" v-animation="keyframeAnimation">
    <text v-if="index > -1" style="text-align: center">{{ index }}</text>
  </view>
</template>

<script>
export default {
  name: "AnimationPosition",
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
              position: { x: 0, y: 0 }
            },
            percent: 0,
          },
          {
            styles: {
              position: { x: 20, y: 0 }
            },
            percent: 0.5,
          },
          {
            styles: {
              position: { x: 0, y: 0 }
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
.position-animation-wrapper {
  width: 34;
  height: 34;
  margin: 6;
  background-color: #15d0b4;
}
</style>
