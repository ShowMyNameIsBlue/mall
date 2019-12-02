<template>
  <div class="slider-wapper">
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-if="sliders.length"
    >
      <swiper-slide v-for="(item, index) in sliders" :key="index">
        <a :href="item.linkUrl" alt="" class="slider-link">
          <img :src="item.picUrl" alt="" class="slider-img" />
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from '@base/slider'
import { swiperSlide } from 'vue-awesome-swiper'
import { sliderOptions } from './config'
import { getHomeSlider } from '@api/home'
import MeLoading from '@base/loading'
export default {
  name: 'HomeSlider',
  components: {
    MeSlider,
    swiperSlide,
    MeLoading
  },
  created() {
    this.getSliders()
  },
  methods: {
    update() {
      return this.getSliders()
    },
    getSliders() {
      return getHomeSlider().then(data => {
        this.sliders = data
      })
    }
  },
  data() {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
    }
  }
}
</script>
<style lang="scss" scoped>
.slider-wapper {
  width: 100%;
  height: 4.575rem;
}

.slider-link {
  display: block;
}

.slider-link,
.slider-img {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
