<template>
  <div class="krokology-task">
    <h2 class="page-title">Krokology Academy</h2>
    <Slider />
    <Form />
  </div>
</template>

<script setup>
import Form from "./From.vue";
import Slider from "./Slider.vue";
</script>
<style lang="scss" scoped>
.page-title {
  font-family: Poppins;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  padding: 20px 0;
  color: $color-black;
}
</style>
