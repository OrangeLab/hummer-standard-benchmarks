<template>
  <scroller class="scroller">
    <view class="animation-wrapper">
      <view v-for="(item, index) in aniArr" :key="index">
        <AnimationPosition v-if="index % 5 === 0"></AnimationPosition>
        <AnimationRotate v-if="index % 5 === 1"></AnimationRotate>
        <AnimationScale v-if="index % 5 === 2"></AnimationScale>
        <AnimationOpacity v-if="index % 5 === 3"></AnimationOpacity>
        <AnimationBackground v-if="index % 5 === 4"></AnimationBackground>
      </view>
    </view>
  </scroller>
</template>

<script>
import AnimationBackground from '../components/animationBackground'
import AnimationPosition from '../components/animationPosition'
import AnimationOpacity from '../components/animationOpacity'
import AnimationRotate from '../components/animationRotate'
import AnimationScale from '../components/AnimationScale'

const ARRAY_LENGTH = 500;

export default {
  name: 'Animation',
  components: {
    AnimationBackground,
    AnimationPosition,
    AnimationOpacity,
    AnimationRotate,
    AnimationScale
  },
  data () {
    return {
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
</style>
