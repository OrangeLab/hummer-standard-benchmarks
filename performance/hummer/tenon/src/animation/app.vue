<template>
  <scroller class="scroller">
    <input type="number" :focused="focused"/>
    <view class="animation-wrapper">
      <text>1111</text>
      <view v-for="(item, index) in aniArr" :key="index">
        <AnimationBackground v-if="index%5===0"></AnimationBackground>
        <AnimationPosition v-if="index%5===1"></AnimationPosition>
        <AnimationOpacity v-if="index%5===2"></AnimationOpacity>
        <AnimationRotate v-if="index%5===3"></AnimationRotate>
        <AnimationScale v-if="index%5===4"></AnimationScale>
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
      focused: false,
      aniArr: new Array(ARRAY_LENGTH)
    }
  },
  mounted () {

    setInterval(() => {
      this.focused = !this.focused
    }, 1000);
  }
}
</script>

<style scoped>
.animation-wrapper{
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
