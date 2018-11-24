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
      v-card-title
        h2 Understanding the cost of the Ethereum Virtual Machine
      v-card-text
        p Gas is the unit of measure used to pay the miners transaction fees which is what motivates them to include transactions into each block.
        p Gas' value is designed to be separate from the exchange rate of Ethereum so that the price of one operation on the Ethereum Virtual Machine can have a predictable cost.
        p Current (SafeLow) Gas Price 
          span.primary--text {{gas.safeLow}} Gwei*
        p Current (Standard) Gas Price 
          span.primary--text {{gas.standard}} Gwei*
        p Current (Fast) Gas Price 
          span.primary--text {{gas.fast}} Gwei*
        p Current (Fastest) Gas Price 
          span.primary--text {{gas.fastest}} Gwei*
        p The higher gas price you are willing to pay in your transaction the more likely that you are to be included in the next block.  
        p There is a gas limit which is algorithmically set by the miners.  It varies, but is somewhere around 8,000,000 per block.  This sets the upper limit on how much data you could embed in one transaction.
        p Current Ethereum/USD Price 
          span.primary--text ${{eth.quotes.USD.price | money}}**
        //- p ETH/Gas = {{ethGas}}
        //- p USD/Gas = {{usdGas}}
        p The minimum gas required to make a basic transaction is 21,000 Gwei.
        P So it currently costs 
          span.primary--text ${{currentTransactionCost | smallmoney}} 
          span.white--text to send any amount of ETH from one account to another based on the standard gas price which is the simplest transaction that can occur.
        p Compare this to the transaction fees that get charged by institutional fiat currency banks, which can be anywhere from 0% to 6% depending on the situation. 
        p To initialize a basic Smart Contract costs around 32,000 Gwei or 
          span.primary--text ${{smartContractCost | smallmoney}}
        p The absolute maximum you could spend on one transaction using 8,000,000 Gwei 
          span.primary--text ${{maxPossibleCost | smallmoney}}
        p This would be around 1,000,000 operations in one transaction.
        P Using Danny Ryan's calculations*** AWS would cost around $0.0000000578 to do a million operations. 
        p So it is currently 
          span.primary--text {{ costAgainstAWS | money}} 
          span.white--text times more expensive to use the EVM than AWS for calculations at scale.
        
      v-card-text
        p References
        v-btn(href="https://www.etherchain.org/api/gasPriceOracle" target="_blank" rel="noopener" block large) *Ether Chain
        v-btn(href="https://coinmarketcap.com/api/#endpoint_listings/" target="_blank" rel="noopener" block large) **Coin Market Cap Api
        v-btn(href="https://hackernoon.com/ether-purchase-power-df40a38c5a2f" target="_blank" rel="noopener" block large) ***Thank You Danny Ryan
        v-btn(href="https://ethgasstation.info/" target="_blank" rel="noopener" block large) Eth Gas Station

        
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      coins: null,
      gas: {
        safeLow: 0,
        standard: 0,
        fast: 0,
        fastest: 0
      },
      eth: [
        {
          quotes: {
            USD: {
              price: 0
            }
          }
        }
      ]
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
      .get('https://www.etherchain.org/api/gasPriceOracle')
      .then(response => (this.gas = response.data));
  },
  computed: {
    ethGas () {
      return this.gas.standard * 0.000000001
    },
    usdGas () {
      return this.ethGas * this.eth.quotes.USD.price
    },
    currentTransactionCost () {
      return this.usdGas * 21000
    },
    smartContractCost () {
      return this.usdGas * 32000
    },
    maxPossibleCost () {
      return this.usdGas * 8000000
    },
    costAgainstAWS () {
      return this.usdGas * 8000000 / 0.0000000578
    }
  },
  filters: {
    money: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.substring(0,6)
    },
    smallmoney: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.substring(0,7)
    }
  }
};
</script>
