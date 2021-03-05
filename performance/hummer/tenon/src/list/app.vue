<template>
  <view class="page">
    <ex-list class="list" :data="list">
      <template v-slot:refresh>
        <view>
          <text>———— 下拉刷新 ————</text>
        </view>
      </template>
      <template v-slot:loadmore>
        <view>
          <text>———— 我也是有底线的 ————</text>
        </view>
      </template>
      <template v-slot:item="item">
        <view class="list-item">
          <AnimationBackground :index=item.index></AnimationBackground>
          <AnimationPosition :index=item.index></AnimationPosition>
          <AnimationOpacity :index=item.index></AnimationOpacity>
          <AnimationRotate :index=item.index></AnimationRotate>
          <AnimationScale :index=item.index></AnimationScale>
        </view>
      </template>
    </ex-list>
  </view>
</template>
<style lang="less" scoped>
  .page{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list{
    width: 100%;
    height: 100%;
  }
  .list-item{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>

import AnimationBackground from '../components/animationBackground'
import AnimationPosition from '../components/animationPosition'
import AnimationOpacity from '../components/animationOpacity'
import AnimationRotate from '../components/animationRotate'
import AnimationScale from '../components/AnimationScale'

export default {
  pageConfig: {
    canScroll: false
  },
  components: {
    AnimationBackground,
    AnimationPosition,
    AnimationOpacity,
    AnimationRotate,
    AnimationScale
  },
  data(){
    return {
      list: new Array(200)
    }
  }
}
</script>