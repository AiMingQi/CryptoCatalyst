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
          h1 Distinguished Guests*
          v-card(v-for="visitor in store.visitorsInFeed")
            v-card-title
              //- v-img(:src="visitor.visitor.avatar.uri" max-height="100px" max-width="100px" )
              h2.my-2.py-3.ml-3 {{visitor.visitor.name}} from {{visitor.visitor.country}}
          h6.py-3 *The first 11 unique individuals to sign the distinguished guest book with a valid email address, will receive 100 ADA upon validation.
        v-dialog(
          v-model="dialog"
          width="500px"
        )
          //- v-btn(slot="activator") Click Me
          v-card
            v-card-text.text-xs-left
              h2 Thanks for signing the guest book 
              h2.primary--text.mt-3 {{visitor.payload.name}} From {{visitor.payload.country}} 
              h3.mt-3 Learning Moment:
              p So what just happened was you created a private key pair with us that is stored on the Ethereum blockchain using uPort.  Now you have your own private key that you control with some embedded information like your name, picture, location, email, &amp; phone.  
              p Anytime you are at a site that supports uPort and needs that information you can use it as a login device.  Think of it as like an FB or Google single sign on.  Only instead of your information being stored, tracked and owned by those companies, it is stored on the blockchain and controlled completely by you.  If you want to change or delete it you can.
            v-card-actions
              v-spacer
              v-btn(@click.stop="dialog = false") Close
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
      dialog: false,
      visitor: {
        visitor: {
          avatar: {
            uri: '/main-logo.png'
            }
        },
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
        requested: ['name','country','email','avatar'],
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
        this.dialog = true
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

