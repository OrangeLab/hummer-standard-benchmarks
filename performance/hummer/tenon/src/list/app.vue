<template>
  <view class="page">
    <ex-list class="list" :data="list">
      <template v-slot:item="item">
        <view class="list-item">
          <BaseCube :index=item.index></BaseCube>
          <BaseCube :index=item.index></BaseCube>
          <BaseCube :index=item.index></BaseCube>
          <BaseCube :index=item.index></BaseCube>
          <BaseCube :index=item.index></BaseCube>
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
    margin-top: 10;
    padding: 10 0;
    background-color: #dcf5f1;
  }
</style>

<script>

import BaseCube from '../components/baseCube'

export default {
  pageConfig: {
    canScroll: false
  },
  components: {
    BaseCube
  },
  data(){
    return {
      list: new Array(1000)
    }
  }
}
</script>