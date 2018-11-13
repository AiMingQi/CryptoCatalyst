<template lang="pug">
  v-content
    v-layout(row wrap)
      v-card.mx-auto
        v-card-text
          v-btn(@click.prevent="signInWithGoogle" v-if="store.currentUser == null") Login
</template>
<script>
import { store } from '@/store';
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  data () {
    return {
      store
    }
  },
  methods: {
    signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    }
  }
}
</script>
