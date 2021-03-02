<template>
    <recycle-list for="(item, index) in aniArr">
      <cell-slot>
        <div class="animation-wrapper">
          <AnimationBackground :index="index"></AnimationBackground>
          <AnimationPosition :index="index"></AnimationPosition>
          <AnimationOpacity :index="index"></AnimationOpacity>
          <AnimationRotate :index="index"></AnimationRotate>
          <AnimationScale :index="index"></AnimationScale>
        </div>
      </cell-slot>
    </recycle-list>
</template>

<script>
import AnimationBackground from '@/components/animationBackground'
import AnimationPosition from '@/components/animationPosition'
import AnimationOpacity from '@/components/animationOpacity'
import AnimationRotate from '@/components/animationRotate'
import AnimationScale from '@/components/AnimationScale'

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
      aniArr: new Array(200)
    }
  }
}
</script>

<style scoped>
.animation-wrapper{
  flex-direction: row;
  /* flex-wrap: wrap; */
}
</style>
