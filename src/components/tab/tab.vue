<template>
  <div class="tab">
    <cube-tab-bar
    :showSlider="true"
    v-model="selectedLabel"
    :data="tabs"
    ref="tabBar"
    class="border-bottom-1px">
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
      :loop="false"
      :auto-play=false
      :show-detail=false
      :initial-index="index"
      ref="slide"
      >
        <cube-slide-item>
          <goods></goods>
        </cube-slide-item>
        <cube-slide-item>
          <ratings></ratings>
        </cube-slide-item>
        <cube-slide-item>
          <seller></seller>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Goods from 'components/goods/good'
  import Ratings from 'components/ratings/ratings'
  import Seller from 'components/seller/seller'

  export default {
    name: 'tab',
    data() {
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .tab
    display: flex
    flex-direction: column
    height: 100%
    >>> .cube-tab
      padding: 10px 0
    .slide-wrapper
      flex: 1
      overflow: hidden
</style>
