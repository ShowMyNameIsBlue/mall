<template>
  <div class="result">
    <div class="loading-container" v-show="loading">
      <me-loading />
    </div>
    <ul class="g-list" v-show="!loading && results.length">
      <li
        class="g-list-item"
        v-for="(item, index) in results"
        :key="index"
        @click="$_search_selectItem(item[0])"
      >
        <span class="g-list-text">{{ item[0] }}</span>
      </li>
    </ul>
    <div class="no-result" v-show="!loading && !results.length">没有结果</div>
  </div>
</template>

<script>
import MeLoading from '@base/loading'
import { getSearchResult } from '@api/search'
import { searchMixin } from '@assets/js/mixins'
export default {
  data() {
    return {
      results: [],
      loading: false
    }
  },
  watch: {
    query(query) {
      this.getResults(query)
    }
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  methods: {
    getResults(keyword) {
      if (!keyword) return
      this.loading = true
      getSearchResult(keyword).then(data => {
        if (data) {
          this.results = data
          this.loading = false
        }
      })
    }
  },
  name: 'SearchResult',
  components: {
    MeLoading
  },
  mixins: [searchMixin]
}
</script>

<style lang="scss" scoped>
.no-result {
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  background: #fff;
}
</style>
