<template>
  <div class="mine-loading " :class="{ 'mine-loading-line': inline }">
    <span class="mine-loading-indicator" v-if="indicator === 'on'">
      <slot><img src="./loading.gif" alt=""/></slot>
    </span>
    <div class="mine-loading-text" v-if="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'MeLoading',
  props: {
    indicator: {
      type: String,
      default: 'on',
      validator(value) {
        return ['on', 'off'].indexOf(value) > -1
      }
    },
    text: {
      type: String,
      default: '加载中...'
    },
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.mine-loading {
  overflow: hidden;
  width: 100%;
  height: 100%;
  @include flex-center(column);
  &.mine-loading-inle {
    flex-direction: row;
    .mine-loading-indicator ~ .mine-loading-text {
      margin-top: 0;
      margin-left: 6px;
    }
  }
}
.mine-loading-indicator ~ .mine-loading-text {
  margin-top: 0.15rem;
}
</style>
