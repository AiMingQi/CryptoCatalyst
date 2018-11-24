<template lang="pug">
  div
    h1 Coin Data
    //- v-card(v-for="coin in coins" :key="coin.rank" )
    //-   v-card-title
    //-     h2 {{coin.id}} {{coin.name}} - {{coin.symbol}}
    //-   v-card-text
    //-     P Rank {{coin.rank}}
    //-     P USD Price ${{coin.quotes.USD.price}}
    v-card
      v-card-text
        p {{gas}}
        p {{eth}}
        v-treeview(:items="coins")
      //- v-card-actions
      //-   p References
      //-   v-btn(href="https://hackernoon.com/ether-purchase-power-df40a38c5a2f" target="_blank" rel="noopener" block large) Thank You Danny Ryan
      //-   v-btn(href="https://ethgasstation.info/" target="_blank" rel="noopener" block large) Eth Gas Station
      //-   v-btn(href="https://coinmarketcap.com/api/#endpoint_listings/" target="_blank" rel="noopener" block large) Coin Market Cap Api

        
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      coins: null,
      gas: null,
      eth: null
    };
  },
  mounted () {
    axios
      .get('https://api.coinmarketcap.com/v2/ticker/?limit=10')
      .then(response => (this.coins = response.data.data));
    axios
      .get('https://api.coinmarketcap.com/v2/ticker/1027/')
      .then(response => (this.eth = response.data.data));
    axios
      .get('https://ethgasstation.info/json/ethgasAPI.json')
      .then(response => (this.gas = response.data));
  }
};
</script>
