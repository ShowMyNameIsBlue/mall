<template>
  <transition name="search">
    <div class="search">
      <header class="g-header-container">
        <search-header />
      </header>
      <div class="g-content-container">
        <me-scroll>
          <search-hot></search-hot>
          <search-history
            @show-confirm="showConfirm"
            ref="history"
          ></search-history>
        </me-scroll>
      </div>
      <me-confirm
        :msg="msg"
        ref="confirm"
        @confirm="clearAllsearchHistorys"
      ></me-confirm>
    </div>
  </transition>
</template>

<script>
import MeScroll from '@base/scroll'
// import MeConfirm from '@base/confirm'
import SearchHeader from './header'
import SearchHot from './hot'
import SearchHistory from './history'
import SearchResult from './result'
import MeConfirm from '@base/confirm'

export default {
  data() {
    return {
      msg: '你确定要清空吗'
    }
  },
  name: 'Search',
  components: {
    MeScroll,
    MeConfirm,
    SearchHeader,
    SearchHot,
    SearchHistory,
    SearchResult
  },
  methods: {
    showConfirm() {
      this.$refs.confirm.show()
    },
    clearAllsearchHistorys() {
      this.$refs.history.clear()
      this.$refs.history.update()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';

.search {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $search-z-index;
  background-color: $bgc-theme;
}
.search-enter-active,
.search-leave-active {
  transition: all 0.3s;
}

.search-enter,
.search-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
