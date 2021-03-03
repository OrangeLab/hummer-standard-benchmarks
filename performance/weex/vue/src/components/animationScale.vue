<template recyclable>
  <div class="scale-animation-wrapper" ref="scale-animation">
    <text v-if="index>-1" style="text-align:center;">{{index}}</text>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
const ScaleList = new Map([
  [0, 'scale(0.5)'],
  [1, 'scale(1)']
])

export default {
  name: 'AnimationScale',
  props: {
    index: Number,
    default: -1
  },
  data () {
    return {
      ref: null,
      nextKey: 0,
      nextScale: ScaleList.get(0)
    }
  },
  mounted () {
    this.ref = this.$refs['scale-animation']
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      let that = this
      animation.transition(
        this.ref,
        {
          styles: {
            transform: this.nextScale
          },
          duration: 1000,
          timingFunction: 'linear',
          needLayout: false,
          delay: 0
        },
        function () {
          that.setNextScale()
          that.startAnimation()
        }
      )
    },
    setNextScale () {
      this.nextKey = this.nextKey + 1
      this.nextKey = ScaleList.has(this.nextKey) ? this.nextKey : 0
      this.nextScale = ScaleList.get(this.nextKey)
    }
  }
}
</script>

<style scoped>
  .scale-animation-wrapper{
    width: 70;
    height: 70;
    margin: 10;
    background-color: #15D0B4;
  }
</style>
