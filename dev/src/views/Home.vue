<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      div.text-xs-center
        v-img(src="./main-logo.png" alt="Crypto Catalyst Logo" class="mb-5")
        h1 Where the Reaction is Taking Place
        v-btn(@click.prevent="signInWithGoogle") Login with Google
        form(@submit.prevent="formPost")
          textarea(v-model="message")
          input(type="submit" value="DUNK!")
  </form>
</template>

<script>
import { store } from '../store';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data () {
    return {
      message: null
    }
  },
  methods: {
    signInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    formPost() {
      store.writeEvidence(this.message);
      console.log('trying to send')
    }
  }
}
</script>