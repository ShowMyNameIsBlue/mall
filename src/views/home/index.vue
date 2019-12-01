<template>
  <div class="home">
    <header class="g-header-container">
      <home-header />
    </header>
    <me-scroll
      :data="recommends"
      pullDown
      @pull-down="pullToRefresh"
      ref="scoll"
    >
      <home-slider ref="slider" />
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommends"></home-recommend>
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
import HomeRecommend from './recommend'

export default {
  name: 'Home',
  data() {
    return {
      recommends: []
    }
  },
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend
  },
  methods: {
    getRecommends(recommends) {
      this.recommends = recommends
    },
    pullToRefresh(end) {
      this.$refs.slider.update().then(end)
    }
  }
}
</script>
