<template>
  <div>
    <router-view/>

    <FooterGuide v-show="$route.meta.isShow"/>
  </div>

</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    mounted(){
      this.$store.dispatch('getAddress')
    },
    components:{
      FooterGuide
     }
  }

</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
