<template>
  <div class="home">
    <header class="g-header-container">
      <home-header />
    </header>
    <me-scroll>
      <home-slider />
      <home-nav></home-nav>
    </me-scroll>

    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>
<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import HomeNav from './nav'
import MeScroll from '@base/scroll'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav
  }
}
</script>
