<template>
    <list>
      <cell v-for="(item, index) in aniArr" :key="index">
        <div class="animation-wrapper">
          <BaseCube :index="index"></BaseCube>
          <BaseCube :index="index"></BaseCube>
          <BaseCube :index="index"></BaseCube>
          <BaseCube :index="index"></BaseCube>
          <BaseCube :index="index"></BaseCube>
        </div>
      </cell>
    </list>
</template>

<script>
import BaseCube from '@/components/baseCube'

export default {
  name: 'list',
  components: {
    BaseCube
  },
  data () {
    return {
      aniArr: new Array(1000)
    }
  }
}
</script>

<style scoped>
.animation-wrapper{
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20;
  padding: 20 0;
  background-color: #dcf5f1;
  /* flex-wrap: wrap; */
}
</style>
