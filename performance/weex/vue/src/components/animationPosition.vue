<template recyclable>
  <div class="position-animation-wrapper" ref="position-animation">
    <text v-if="index>-1" style="text-align:center;">{{index}}</text>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
const PositionList = new Map([
  [0, 'translate(20, 0)'],
  [1, 'translate(0, 0)']
])

export default {
  name: 'PositionBackground',
  props: {
    index: Number,
    default: -1
  },
  data () {
    return {
      ref: null,
      nextKey: 0,
      nextPosition: PositionList.get(0)
    }
  },
  mounted () {
    this.ref = this.$refs['position-animation']
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      let that = this
      animation.transition(
        this.ref,
        {
          styles: {
            transform: this.nextPosition
          },
          duration: 1000,
          timingFunction: 'linear',
          needLayout: false,
          delay: 0
        },
        function () {
          that.setNextPosition()
          that.startAnimation()
        }
      )
    },
    setNextPosition () {
      this.nextKey = this.nextKey + 1
      this.nextKey = PositionList.has(this.nextKey) ? this.nextKey : 0
      this.nextPosition = PositionList.get(this.nextKey)
    }
  }
}
</script>

<style scoped>
  .position-animation-wrapper{
    width: 70;
    height: 70;
    margin: 10;
    background-color: #15D0B4;
    justify-content: center;
  }
</style>
