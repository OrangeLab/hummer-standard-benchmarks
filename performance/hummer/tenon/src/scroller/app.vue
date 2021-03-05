<template>
  <scroller class="scroller">
    <view class="animation-wrapper" v-for="(item, index) in aniArr" :key="index">
      <AnimationBackground :index=index></AnimationBackground>
      <AnimationPosition :index=index></AnimationPosition>
      <AnimationOpacity :index=index></AnimationOpacity>
      <AnimationRotate :index=index></AnimationRotate>
      <AnimationScale :index=index></AnimationScale>
    </view>
  </scroller>
</template>

<script>
import AnimationBackground from '../components/animationBackground'
import AnimationPosition from '../components/animationPosition'
import AnimationOpacity from '../components/animationOpacity'
import AnimationRotate from '../components/animationRotate'
import AnimationScale from '../components/AnimationScale'

const ARRAY_LENGTH = 200;

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
