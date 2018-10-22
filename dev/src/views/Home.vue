<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      v-card.my-3(v-for="evidence in currentEvidences")
        v-card-title 
          h1 Evidence Title
            br
          h4 Discovered by {{evidence.author_name}} on {{evidence.createdOn.seconds | moment("dddd, MMMM Do YYYY")}}
        v-card-text 
          p {{evidence.message}}
        v-divider
        v-card-actions 
          p Validate 
          v-btn True
          v-btn Fake News
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
    formPost() {
      store.writeEvidence(this.message);
      console.log('trying to send')
    }
  },
  computed: {
    currentEvidences () {
      return store.evidenceInFeed
    }
  }
}
</script>