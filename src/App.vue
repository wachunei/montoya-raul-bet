<template>
  <div class="flex justify-evenly">
    <img class="transform scale-75" src="./assets/handshake.webp" />
    <div class="self-center">
      <h1 class="text-4xl mb-5">Apuesta Montoya-Raúl</h1>
      <h2 class="text-2xl mb-1">The Sat-Peso Parity</h2>
      <h3 class="text-l">17 de Diciembre 2021</h3>
    </div>
    <img class="transform scale-75" src="./assets/handshake.webp" />
  </div>

  <div class="flex mb-4 px-2 justify-evenly">
    <Ticker :price="budaPrice" text="Current Price:" />
    <Ticker :price="betPrice" text="Bet Price:" />
  </div>

  <Progress :currentValue="budaPrice" :total="betPrice" />
</template>

<script>
import BudaClient from "./api/buda-client";
import Ticker from "./components/ticker.vue";
import Progress from "./components/progress.vue";

export default {
  name: "App",
  components: {
    Ticker,
    Progress
  },
  data() {
    return {
      budaPrice: 23962841,
      betPrice: 100_000_000
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
}
</style>
