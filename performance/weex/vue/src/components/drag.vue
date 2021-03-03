<template>
  <div class="drag-wrapper">
    <div class="drag-target" :style="positionStyle" @touchmove="handleMove" @touchend="handleEnd">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Drag',
  data () {
    return {
      event: '',
      positionStyle: Object.create(null),
      previewPageX: -1,
      previewPageY: -1,
      firstTouch: true,
      offsetX: 0,
      offsetY: 0,
      index: 0,
      moving: false
    }
  },
  methods: {
    handleMove (e) {
      // if (this.moving) {
      //   return
      // }
      this.event = e
      if (this.firstTouch) {
        this.firstTouch = false
        this.previewPageX = e.changedTouches[0].pageX
        this.previewPageY = e.changedTouches[0].pageY
        return
      }
      let left = e.changedTouches[0].pageX - this.previewPageX
      let top = e.changedTouches[0].pageY - this.previewPageY
      this.offsetX = this.offsetX + left
      this.offsetY = this.offsetY + top
      this.positionStyle = {
        left: this.offsetX,
        top: this.offsetY
      }
      this.moving = true
      // setTimeout(() => {
      //   this.moving = false
      // }, 16)

      this.previewPageX = e.changedTouches[0].pageX
      this.previewPageY = e.changedTouches[0].pageY
    },
    handleEnd () {
      this.firstTouch = true
    }
  }
}
</script>

<style scoped>
.drag-target{
  width: 200;
  height: 200;
  background-color: #15D0B4;
  position: absolute;
}
</style>
