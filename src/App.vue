<template>
  <div id="app" @touchmove.prevent>
    <v-header></v-header>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'

  export default {
    name: 'app',
    components: {
      VHeader
    }
  }
</script>

<style lang="stylus">
</style>
