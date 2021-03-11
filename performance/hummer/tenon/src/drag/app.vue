<template>
  <view class="page">
    <view class="demo-item" :style="curPositionStyle" @pan="handlePan">
    </view>
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
  .demo-item{
    position: absolute;
    left: 0;
    top: 0;
    width: 100;
    height: 100;
    background: #15d0b4;
  }
  .image-item{
    width: 100%;
    height: 100%;
  }
</style>

<script>
const PanEventState = {
  "DEFAULT": 0,
  "BEGAN": 1,
  "CHANGED": 2,
  "ENDED": 3,
  "CANCELLED": 4
}
export default {
  pageConfig: {
    canScroll: false
  },
  data(){
    return {
     positionX: 0,
     positionY: 0
    }
  },
  computed: {
    curPositionStyle(){
      return `left:${this.positionX};top:${this.positionY}`
    }
  },
  methods: {
    handleTap(){

    },
    handlePan(e){
      let {translation, state} = e;
      if(state === PanEventState.CHANGED){
        let {deltaX, deltaY} = translation;
        this.positionX += Number(deltaX);
        this.positionY += Number(deltaY);
      }
    }
  }
}
</script>