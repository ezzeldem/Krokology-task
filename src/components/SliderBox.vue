<template>
  <div class="slider-box">
    <div class="rate-box">
      <img
        src="/image/star.svg"
        v-for="(rate, index) in data.rate"
        :key="index"
        alt="star"
      />
    </div>
    <p class="description">
      {{ data.description }}
    </p>
    <div class="info-box">
      <div class="img-box">
        <img :src="data.image" alt="" />
      </div>
      <div class="name-box">
        <h4 class="name">{{ data.name }}</h4>
        <h5 class="jop">{{ data.jobTitle }}</h5>
      </div>
    </div>
    <div class="function-box">
      <div class="item" @click="deleteCard(data.id)">
        <img src="/image/delete.svg" alt="delete" />
      </div>
      <div class="item" @click="editCard(data)">
        <img src="/image/pencil.svg" alt="pencil" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSwiperStore } from "@/stores/swiperStore";
const swiperStore = useSwiperStore();
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const deleteCard = (id) => {
  swiperStore.deleteCard(id);
};

const editCard = (data) => {
  swiperStore.selectedItem = data;
};
</script>

<style lang="scss" scoped>
.slider-box {
  padding: 16px;
  background-color: #f2f4f7;
  border-radius: 12px;
  font-family: DM Sans;
  position: relative;
  overflow: hidden;
  &:hover {
    .function-box {
      opacity: 1;
    }
  }
  .function-box {
    @include hover(0.2);
    opacity: 0;
    position: absolute;
    inset: 0;
    background-color: rgba($color-black, 0.2);
    gap: 24px;
    display: flex;
    backdrop-filter: blur(1px);
    align-items: center;
    justify-content: center;
    .item {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      background-color: #fff;
      img {
        height: 20px;
      }
    }
  }
  .rate-box {
    display: flex;
    align-items: center;
    gap: 3.12px;
  }
  .description {
    padding: 12px 0 57px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    min-height: 141px;
    font-family: DM Sans;
  }
  .info-box {
    display: flex;
    gap: 12px;
    align-items: center;
    .img-box {
      img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .name {
      font-size: 14px;
      font-weight: 500;
      color: #101828;
      padding-bottom: 2px;
    }
    .jop {
      font-size: 14px;
      font-weight: 400;
      color: #667085;
    }
  }
}
</style>
