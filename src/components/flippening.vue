<template>
  <div class="border-2 rounded m-4 p-1 self-center">
    <p class="w-64">
      Para dar vuelta el resultado
      <span class="font-bold text-xl">{{ currentLoser }}</span> necesita que el
      BTC se
      <span class="font-bold text-xl">{{ requiredAction }}</span>
      aproximadamente {{ formatCLP(rate) }} CLP por día.
    </p>
  </div>
</template>

<script>
import daysDiff from "../utils/days-difference";
import formatCLP from "../utils/formatCLP";

export default {
  props: {
    currentValue: {
      type: Number,
      required: true
    },
    targetValue: {
      type: Number,
      required: true
    },
    betEndDate: {
      type: Date,
      required: true
    }
  },
  computed: {
    currentLoser() {
      return this.currentValue >= this.targetValue ? "Raúl" : "Javier";
    },
    requiredAction() {
      return this.currentValue >= this.targetValue ? "desvalorice" : "valorice";
    },
    rate() {
      const currentDate = Date.now();
      const daysDifference = daysDiff(currentDate, this.betEndDate);
      const valueDiff = Math.abs(this.targetValue - this.currentValue);

      return Math.round(valueDiff / daysDifference);
    }
  },
  methods: {
    formatCLP
  }
};
</script>
