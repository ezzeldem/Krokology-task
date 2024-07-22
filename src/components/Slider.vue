<template>
  <div class="slider-section">
    <h2 class="slider-title">What Our Customer Said</h2>

    <div class="slider-container" v-if="swiperStore.boxes.length > 0">
      <swiper
        ref="swiperRef"
        :slides-per-view="2.5"
        :space-between="50"
        :breakpoints="{
          480: { slidesPerView: 1.1, spaceBetween: 10 },
          991: { slidesPerView: 2.1, spaceBetween: 20 },
          1200: { slidesPerView: 2.5, spaceBetween: 20 },
        }"
        :modules="[Autoplay]"
        :loop="true"
      >
        <swiper-slide v-for="box in swiperStore.boxes" :key="id">
          <SliderBox :data="box" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="empty-box" v-else>
      There is no review. Please add a new one.
    </div>
  </div>
</template>

<script setup>
import SliderBox from "./SliderBox.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useSwiperStore } from "@/stores/swiperStore";
const swiperStore = useSwiperStore();
</script>

<style lang="scss" scoped>
.slider-section {
  padding: 91px 0 120px 18px;
  .slider-title {
    padding-bottom: 28px;
    font-size: 28px;
    color: #405391;
    font-family: Poppins;
    text-align: center;
    font-weight: 700;
  }
}
.empty-box {
  text-align: center;
  color: #999;
  font-family: Poppins;
  font-weight: 700;
  font-size: 30px;
}
</style>
