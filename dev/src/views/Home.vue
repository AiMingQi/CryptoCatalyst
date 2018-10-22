<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      v-card(v-for="evidence in currentEvidences")
        v-card-text {{evidence}}
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