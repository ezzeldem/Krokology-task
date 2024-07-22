<template>
  <div class="form-section">
    <h2 class="form-title">Add / Edit Review Card</h2>

    <div class="form-box">
      <form @submit.prevent="submitHandler">
        <div class="input-box">
          <input type="text" v-model="formData.name" placeholder="Name" />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="formData.jobTitle"
            placeholder="Job Title"
          />
        </div>

        <div class="input-box">
          <textarea
            v-model="formData.description"
            name="review"
            id="review"
            placeholder="Review"
            rows="10"
          ></textarea>
        </div>
        <div class="button-box">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useSwiperStore } from "@/stores/swiperStore";
const swiperStore = useSwiperStore();
const formData = reactive({
  rate: 5,
  name: "",
  jobTitle: "",
  description: "",
});
const isEditing = ref(false);

const submitHandler = () => {
  if (!isEditing.value) {
    const newCard = {
      id: Math.random().toString(36),
      name: formData.name,
      jobTitle: formData.jobTitle,
      description: formData.description,
      image: "https://via.placeholder.com/150",
    };
    swiperStore.addNewCard(newCard);
  } else {
    const updatedCard = {
      ...formData,
      id: swiperStore.selectedItem.id,
    };
    swiperStore.editCard(updatedCard);
    isEditing.value = false;
  }
  formData.name = "";
  formData.jobTitle = "";
  formData.description = "";
  formData.rate = 5;
};

watch(
  () => swiperStore.selectedItem,
  (newItem) => {
    isEditing.value = true;
    formData.name = newItem.name;
    formData.jobTitle = newItem.jobTitle;
    formData.description = newItem.description;
    formData.rate = 5;
  }
);
</script>
<style lang="scss" scoped>
.form-section {
  padding: 0 20px;
  .form-title {
    font-size: 20px;
    font-weight: 700;
    color: $color-black;
    font-family: "DM Sans", sans-serif;
  }
  .form-box {
    .input-box {
      margin-top: 10px;
      input,
      textarea {
        padding: 14px;
        display: block;
        font-family: Poppins;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid #eaecf0;
        &:focus {
          outline: 0;
          border: 1px solid #333;
        }
        &:placeholder {
          color: #667085;
        }
      }
    }
    .button-box {
      padding-top: 27px;
      button {
        font-weight: 500;
        width: 100%;
        cursor: pointer;
        border-radius: 8px;
        padding: 12px;
        font-size: 18px;
        color: $color-white;
        background-color: #1570ef;
        border: 0;
        @include hover(0.2) {
          background-color: #0d5bc9;
        }
      }
    }
  }
}
</style>
