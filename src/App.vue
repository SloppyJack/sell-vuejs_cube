<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import { getSeller } from 'api'

  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this._getSeller()
    },
    methods: {
      _getSeller() {
        return getSeller().then((seller) => {
            this.seller = seller
            console.log(this.seller)
        })
      }
    },
    components: {
      VHeader
    }
  }
</script>

<style lang="stylus">
</style>
