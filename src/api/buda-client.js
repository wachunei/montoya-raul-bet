import axios from "axios";

//const CORS_EVERYWHERE_PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const CORS_EVERYWHERE_PROXY_URL = "https://api.allorigins.win/get?url=";

export default {
  async getBTCPrice() {
    return await axios({
      method: "GET",
      url: `${CORS_EVERYWHERE_PROXY_URL}https://www.buda.com/api/v2/markets/btc-clp/ticker`
    });
  }
};
