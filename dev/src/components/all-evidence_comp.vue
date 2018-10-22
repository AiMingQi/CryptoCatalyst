<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12)
      v-card
        v-card-title
          h1 Evidence of the Reaction
    v-flex(xs12)
      v-card.my-3(
        v-for="evidence in currentEvidences"
        :key="evidence.id"
        )
        v-card-title 
          h1 {{evidence.newEvidence.evidence_title}}
        v-card-text 
          p {{evidence.newEvidence.evidence_body}}
          p Link to Proof:
          a(
            target="_blank"
            :href="evidence.newEvidence.evidence_link"
          )  {{evidence.newEvidence.evidence_link}}
        v-divider
        v-card-title
          h4 Discovered by {{evidence.author_name}} on {{evidence.createdOn.seconds | moment("dddd, MMMM Do YYYY")}}
          v-spacer
          v-avatar.ml-2(
            slot="activator" 
            size="36px"
            )
            img(
              :src="evidence.author_image"
            )
        v-divider
        v-card-actions 
          v-btn(color="secondary") Totally True
          v-spacer
          p -- Validate --
          v-spacer
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