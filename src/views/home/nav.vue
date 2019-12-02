<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic" />
          <span>{{ item.text }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navItems } from './config'
export default {
  name: 'HomeNav',
  created() {
    this.navs = navItems
  }
}
</script>

<style lang="scss" scoped>
@import '~@assets/scss/mixins';
.nav {
  width: 100%;
  padding-top: 0.375rem;
  background-color: #fff;

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: 20%;
    margin-bottom: 0.375rem;
  }

  &-link {
    @include flex-center(column);
  }

  &-pic {
    width: 60%;
    margin-bottom: 0.2rem;
  }
}
</style>
