<template>
  <scroller>
    <view class="cube-wrapper" v-for="(item, index) in aniArr" :key="index">
      <text class="cube-text">{{ index }}</text>
      <text class="cube-text">{{ index }}</text>
      <text class="cube-text">{{ index }}</text>
      <text class="cube-text">{{ index }}</text>
      <text class="cube-text">{{ index }}</text>
    </view>
  </scroller>
</template>

<script>
const ARRAY_LENGTH = 500;

export default {
  data () {
    return {
      aniArr: new Array(ARRAY_LENGTH)
    }
  }
}
</script>

<style scoped>
.cube-wrapper{
  width: 100%;
  display: flex;
  margin-top: 10;
  padding: 10 0;
  background-color: #dcf5f1;
}
.cube-text{
  width: 34;
  height: 34;
  margin: 0 12;
  background-color: #15d0b4;
  text-align:center;
}
</style>
