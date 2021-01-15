<template>
  <Header :budaPrice="budaPrice" />
</template>

<script>
import BudaClient from "./api/buda-client";
import Header from "./components/header.vue";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      budaPrice: 23962841
    };
  },
  mounted() {
    setInterval(this.updateBudaPrice, 15 * 60 * 1000);
    this.updateBudaPrice();
  },
  methods: {
    updateBudaPrice() {
      BudaClient.getBTCPrice().then(
        response =>
          (this.budaPrice = Math.trunc(
            JSON.parse(response.data.contents).ticker.last_price[0]
          ))
      );
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
