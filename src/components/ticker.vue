<template>
  <div class="box-content w-80 shadow-lg border-2 p-2 rounded-sm">
    <p class="font-bold">{{ text }}</p>
    {{ price.toLocaleString() }} CLP
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
