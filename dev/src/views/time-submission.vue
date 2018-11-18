<template lang="pug">
  v-container
    v-layout
      v-flex
        v-card
          v-card-title
            h1 Time Submission
            p For every hour of work that you have committed to Crypto-Catalyst you will be rewarded with 1 CCR* (Crypto-Catalyst-Reaction Token).
            p To receive the token you must fill the form below in completely and accurately, including a clear description of your contribution, the date of the reaction, and your 
              a(href="https://metamask.io/" target="_blank" rel="noopener") MetaMask ETH address 
              | that can receive the ERC20 token.
            p CCR tokens will give you voting rights in our 
              a(href="https://mainnet.aragon.org/#/cryptocatalyst.aragonid.eth/" target="_blank" rel="noopener") Aragon governance model. 
            strong *Ownership and responsibility of control of the token once it is issued to you is completely up to you.
          v-card-text
            P 1. Please Enter Your Name
            v-text-field(v-model="name")
            P 2. Please Enter a Description of the Reaction You Performed
            v-textarea(v-model="description")
            p 3. Please Enter the Date of the Reaction
            v-date-picker(landscape reactive v-model="date")
            p 4. Please Indicate How Much Time You Committed to the Reaction
            v-text-field(mask="##" label="In whole hours" v-model="time")
            p 5. Your MetaMask address that can accept ERC20 Tokens
            v-text-field( label="ETH Address" v-model="ethaddress")
        v-card
          v-card-title
            h1 Thank You 
              span.primary--text {{name}}
          v-card-text
            h2 For committing 
              span.primary--text {{time}} 
              span Hrs of your precious life to the Reaction
            p.primary--text {{description}}
            h3 on 
              span.primary--text {{date}}
            //- P {{timeSubmission}}
          v-card-actions
            v-btn.black--text(@click.stop="uportAdd" block large color="primary") Submit


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
        date: new Date().toISOString().substr(0, 10),
        name: '',
        description: '',
        ethaddress: '',
        time: 0,
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
          this.submitTime(this.visitor)
        })
      },
      submitTime () {
        if (this.name !== '') {
          // Native form submission is not yet supported
          store.writeTimeSubmission(this.timeSubmission, this.visitor);
          console.log('trying to send')
          console.log(this.timeSubmission, this.visitor)
        } else {
          console.log('fail')
        }
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
      timeSubmission () {
        return {
        timesub_date: this.date,
        timesub_name: this.name,
        timesub_description: this.description,
        timesub_time: this.time,
        timesub_ethaddress: this.ethaddress
        }
      }
    }
  }
</script>