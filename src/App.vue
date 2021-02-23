<template>
  <div class="flex justify-evenly">
    <img class="transform scale-75" src="./assets/handshake.webp" />
    <div class="self-center">
      <h1 class="text-4xl mb-5">
        Montoya-Raúl <a href="bitcoin.pdf" download>Bitcoin</a> Bet
      </h1>
      <h2 class="text-2xl mb-1">The Sat-Peso Parity</h2>
      <h3 class="text-l">
        {{ betStartDate.toLocaleString("es-ES", dateFormatOptions) }} -
        {{ betEndDate.toLocaleString("es-ES", dateFormatOptions) }}
      </h3>
    </div>
    <img class="transform scale-75" src="./assets/handshake.webp" />
  </div>

  <div class="flex mb-4 px-2 justify-evenly">
    <Ticker :price="budaPrice" text="Current Price:" />
    <Ticker :price="betPrice" text="Bet Price:" />
    <Ticker :price="10000" text="Bet amount:" symbol="Sats" />
    <Ticker :price="Math.round(budaPrice / 10000)" text="Current Bet Value:" />
  </div>

  <Progress
    :currentValue="daysElapsed"
    :total="totalDays"
    :title="'Date progress:'"
    :type="'date'"
  />
  <Progress
    :currentValue="budaPrice"
    :total="betPrice"
    :title="'Price Progress:'"
    :type="'currency'"
  />
  <div class="flex justify-center mb-4">
    <CurrentWinner :threshold="budaPrice >= betPrice" />
    <Flippening
      :currentValue="budaPrice"
      :targetValue="betPrice"
      :betEndDate="betEndDate"
    />
  </div>
</template>

<script>
import BudaClient from "./api/buda-client";
import CurrentWinner from "./components/current-winner.vue";
import Flippening from "./components/flippening.vue";
import Progress from "./components/progress.vue";
import Ticker from "./components/ticker.vue";
import daysDiff from "./utils/days-difference";

export default {
  name: "App",
  components: {
    CurrentWinner,
    Flippening,
    Progress,
    Ticker
  },
  data() {
    return {
      budaPrice: 26_450_000,
      betPrice: 100_000_000,
      betStartDate: new Date(Date.parse("17 Dec 2020 23:59:59")),
      betEndDate: new Date(Date.parse("17 Dec 2021 23:59:59")),
      dateFormatOptions: {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
      }
    };
  },
  computed: {
    totalDays() {
      return daysDiff(this.betStartDate, this.betEndDate);
    },
    daysElapsed() {
      return daysDiff(this.betStartDate, new Date());
    }
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
