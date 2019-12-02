<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">
      <me-search-box
        placeholder="双11好礼，好货5折起"
        slot="center"
        fake
        @query="getQuery"
        @click.native="goToSearch"
      ></me-search-box>
    </div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
import MeNavbar from '@base/navbar'
import MeSearchBox from '@base/search-box'
export default {
  data() {
    return {
      visible: true
    }
  },
  name: 'HomeHeader',
  components: {
    MeNavbar,
    MeSearchBox
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    getQuery(query) {
      console.log(query)
    },
    goToSearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.header {
  &.mine-navbar {
    // background-color: $header-bgc-translucent;
    background-color: transparent;
    transition: background-color 0.5s;
  }

  &.header-transition {
    background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
}
</style>
