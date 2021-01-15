<template>
  <div>
    <h1 class="text-4xl mb-4">Apuesta Montoya-Raúl</h1>
    <div class="flex">
      <div
        class="box-content h-8 w-32 shadow-lg flex-1 border-solid border-2 rounded-sm"
      >
        <p>Current Price: {{ budaPrice.toLocaleString() }} CLP</p>
      </div>
      <div
        class="box-content h-8 w-32 shadow-lg flex-1 border-solid border-2 rounded-sm"
      >
        <p>Bet Price: {{ Number(100000000).toLocaleString() }} CLP</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    budaPrice: {
      type: Number,
      default: 0
    }
  }
};
</script>
