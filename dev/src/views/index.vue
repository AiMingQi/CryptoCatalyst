<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      div.pa-3.text-xs-center
        v-img(src="/main-logo.png" alt="Crypto Catalyst Logo" max-width="400px" class="mb-5 center" style="margin: 0 auto;")
        h2 Our theory is that there are 5 types of ways that Crypto will change the world. 
        v-btn(to="/all-evidence" color="secondary") See the Evidence of the Reaction
        h2 This is a collection of the evidence of the reaction taking place.
        v-btn(@click.prevent="uportAdd") Share who you are with uport
        h1 Welcome 
        h2 {{name.payload.name}}
</template>

<script>
import { Connect } from 'uport-connect'

const uport = new Connect('Crypto-Catalyst', {network: 'mainnet'})

export default {
  data () {
    return {
      name: {
        payload: {
          name: 'Friend'
        }
      }
    }
  },
  updated () {
    this.uportAdd
  },
  methods: {
    uportAdd () {
      uport.requestDisclosure({
        requested: ['name','country'],
        notifications: true
      })
      uport.onResponse('disclosureReq').then(payload => {
        const address = payload.address
        this.name = payload
        console.log(payload)
        console.log(this.name)
      })
    }
  }
}
</script>

