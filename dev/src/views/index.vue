<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      div.pa-3.text-xs-center
        v-img(src="/main-logo.png" alt="Crypto Catalyst Logo" max-width="400px" class="mb-5 center" style="margin: 0 auto;")
        h2 Our theory is that there are 5 types of ways that Crypto will change the world. 
        v-btn(to="/all-evidence" color="secondary") See the Evidence of the Reaction
        h2 This is a collection of the evidence of the reaction taking place.
        br
        p Sign our 
        v-btn(@click.prevent="uportAdd" color="rgb(92, 80, 202)") Distinguished Guest Book with uPort
        br
        a(href="https://www.uport.me" target="_blank" rel="noopener") Get uPort
        h1 Welcome 
        h2 {{visitor.payload.name}} 
        h3 From {{visitor.payload.country}} 
        v-card.mt-5(light)
          h1 Distinguished Guests
          v-card(v-for="visitor in store.visitorsInFeed")
            h2.my-2.py-3 {{visitor.visitor.name}} from {{visitor.visitor.country}}
</template>

<script>
import { store } from '../store';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Connect } from 'uport-connect'

const uport = new Connect('Crypto-Catalyst', {network: 'mainnet'})

export default {
  data () {
    return {
      visitor: {
        payload: {
          name: 'Friend',
          country: 'Earth'
        }
      },
      store
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
        this.visitor = payload
        console.log(payload)
        console.log(this.visitor)
        this.submitVisitor(this.visitor)
      })
      
    },
    submitVisitor () {
      if (this.visitor.payload.name !== 'Friend') {
        // Native form submission is not yet supported
        store.writeVisitor(this.visitor);
        console.log('trying to send')
        console.log(this.visitor)
        // this.$router.push('/all-evidence')
      }
    }
  },
  computed: {
    newVisitor () {
      return {
        someone: this.visitor
      }
    }
  }
}
</script>

