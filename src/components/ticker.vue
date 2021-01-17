<template>
  <div class="box-content h-8 w-80 shadow-lg border-solid border-2 rounded-sm">
    {{ text }} {{ price.toLocaleString() }} CLP
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
