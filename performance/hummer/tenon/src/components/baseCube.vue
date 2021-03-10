<template>
  <view class="background-animation-wrapper" v-animation="keyframeAnimation">
    <text v-if="index > -1" style="text-align: center">{{ index }}</text>
  </view>
</template>

<script>
export default {
  name: "BaseCube",
  props: {
    index: {
      type: Number,
      default: -1
    }
  }
};
</script>

<style scoped>
.background-animation-wrapper {
  width: 34;
  height: 34;
  margin: 0 12;
  background-color: #15d0b4;
  justify-content: center;
}
</style>
