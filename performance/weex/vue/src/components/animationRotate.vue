<template recyclable>
  <div class="rotate-animation-wrapper" ref="rotate-animation">
    <text v-if="index>-1" style="text-align:center;">{{index}}</text>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
const RotateList = new Map([
  [0, 'rotate(0)'],
  [1, 'rotate(360deg)']
])

export default {
  name: 'AnimationRotate',
  props: {
    index: Number,
    default: -1
  },
  data () {
    return {
      ref: null,
      nextKey: 0,
      nextRotate: RotateList.get(0)
    }
  },
  mounted () {
    this.ref = this.$refs['rotate-animation']
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      let that = this
      animation.transition(
        this.ref,
        {
          styles: {
            transform: this.nextRotate
          },
          duration: 1000,
          timingFunction: 'linear',
          needLayout: false,
          delay: 0
        },
        function () {
          that.setNextRotate()
          that.startAnimation()
        }
      )
    },
    setNextRotate () {
      this.nextKey = this.nextKey + 1
      this.nextKey = RotateList.has(this.nextKey) ? this.nextKey : 0
      this.nextRotate = RotateList.get(this.nextKey)
    }
  }
}
</script>

<style scoped>
  .rotate-animation-wrapper{
    width: 70;
    height: 70;
    margin: 10;
    background-color: #15D0B4;
    justify-content: center;
  }
</style>
