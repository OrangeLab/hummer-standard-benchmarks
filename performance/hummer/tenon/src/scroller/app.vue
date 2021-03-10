<template>
  <scroller class="scroller">
    <view class="animation-wrapper" v-for="(item, index) in aniArr" :key="index">
      <BaseCube :index=index></BaseCube>
      <BaseCube :index=index></BaseCube>
      <BaseCube :index=index></BaseCube>
      <BaseCube :index=index></BaseCube>
      <BaseCube :index=index></BaseCube>
    </view>
  </scroller>
</template>

<script>
import BaseCube from '../components/baseCube'

const ARRAY_LENGTH = 500;

export default {
  name: 'Animation',
  components: {
    BaseCube
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
