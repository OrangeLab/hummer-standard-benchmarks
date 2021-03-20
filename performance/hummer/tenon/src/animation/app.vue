<template>
  <scroller class="scroller">
    <view class="animation-wrapper">
      <view class="background-animation-wrapper" v-animation="animations[index%5]" v-for="(item, index) in aniArr" :key="index"></view>
    </view>
  </scroller>
</template>

<script>
import {backgroundAnimation,positionAnimation,opacityAnimation,rotateAnimation,scaleAnimation} from './animation'
const ARRAY_LENGTH = 500;

export default {
  name: 'Animation',
  data () {
    return {
      animations: [positionAnimation,rotateAnimation,scaleAnimation,opacityAnimation,backgroundAnimation],
      aniArr: new Array(ARRAY_LENGTH)
    }
  }
}
</script>

<style scoped>
.animation-wrapper{
  flex-direction: row;
  flex-wrap: wrap;
}
.background-animation-wrapper {
  width: 34;
  height: 34;
  margin: 6;
  background-color: #15d0b4;
}
</style>
