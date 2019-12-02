<template>
  <div class="home">
    <header class="g-header-container">
      <home-header
        :class="{ 'header-transition': isHeaderTransition }"
        ref="header"
      />
    </header>
    <me-scroll
      :data="recommends"
      pullUp
      pullDown
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      ref="scroll"
    >
      <home-slider ref="slider" />
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommends" ref="recommend"></home-recommend>
    </me-scroll>

    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop" />
    </div>
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
import MeBacktop from '@base/backtop'
import { HEADER_TRANSITION_HEIGHT } from './config'
import HomeRecommend from './recommend'

export default {
  name: 'Home',
  data() {
    return {
      recommends: [],
      isBacktopVisible: false,
      isHeaderTransition: false
    }
  },
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend,
    MeBacktop
  },
  methods: {
    getRecommends(recommends) {
      this.recommends = recommends
    },
    pullToRefresh(end) {
      this.$refs.slider.update().then(end)
    },
    pullToLoadMore(end) {
      this.$refs.recommend
        .update()
        .then(end)
        .catch(err => {
          if (err) console.error(err)
          end()
        })
    },
    scrollEnd(translate, scroll) {
      this.isBacktopVisible = translate < 0 && -translate > scroll.height
      this.changeHeaderStatus(translate)
    },
    backToTop() {
      this.$refs.scroll && this.$refs.scroll.scrollToTop()
    },
    changeHeaderStatus(translate) {
      if (translate > 0) {
        this.$refs.header.hide()
        return
      }
      this.$refs.header.show()
      this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT
    },
    scroll(translate) {
      this.changeHeaderStatus()
    }
  }
}
</script>
