<template>
  <div class="mine-loading " :class="{ 'mine-loading-line': inline }">
    <span class="mine-loading-indicator" v-if="indicator === 'on'">
      <slot><img src="./loading.gif" alt=""/></slot>
    </span>
    <div class="mine-loading-text" v-if="loadingText">{{ loadingText }}</div>
  </div>
</template>

<script>
export default {
  name: 'MeLoading',
  data() {
    return {
      loadingText: this.text
    }
  },
  watch: {
    text(text) {
      this.loadingText = text
    }
  },
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
  },
  methods: {
    setText(text) {
      this.loadingText = text
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
  &.mine-loading-line {
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
