<template>
  <div class="flex justify-center mb-6">
    <p class="font-bold">{{ title }}</p>
    <div class="border-2 border-purple-300 rounded flex ml-5 row w-9/12">
      <div class="bg-yellow-500" :style="`width:${percentage}%`">
        {{
          type === "currency"
            ? formatCLP(currentValue)
            : currentValue.toLocaleString()
        }}
        /
        {{ type === "currency" ? formatCLP(total) : total.toLocaleString() }} -
        {{ percentage.toFixed(2) }}%
      </div>
    </div>
  </div>
</template>

<script>
import formatCLP from "../utils/formatCLP";

export default {
  props: {
    title: {
      type: String,
      default: "Progress:"
    },
    currentValue: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      default: "currency"
    }
  },
  computed: {
    percentage() {
      return (100 * this.currentValue) / this.total;
    }
  },
  methods: {
    formatCLP
  }
};
</script>
