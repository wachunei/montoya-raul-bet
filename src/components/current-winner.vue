<template>
  <div class="border-2 rounded flex w-max p-2 shadow-lg">
    <p class="font-bold">Current winner</p>
    <img v-if="threshold" src="../assets/javier-head.png" />
    <img v-else src="../assets/raul-head.png" />
  </div>
</template>

<script>
export default {
  props: {
    threshold: {
      type: Boolean,
      required: true
    }
  }
};
</script>
