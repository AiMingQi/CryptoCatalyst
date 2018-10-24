<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12)
      v-card
        v-card-title
          h1 Evidence of the Reaction
          v-btn(to="/submit-evidence" v-if="store.currentUser !== null") Submit
    v-flex(xs12)
      v-card.my-3(
        v-for="evidence in store.evidenceInFeed"
        :key="evidence.id"
        )
        v-card-title 
          h2 {{evidence.newEvidence.evidence_way}}
        v-card-text 
          h1.primary--text {{evidence.newEvidence.evidence_title}}
          h2.primary--text Proof Type: 
          h3 {{evidence.newEvidence.evidence_type}}
          br
          h2.primary--text Excerpt or Description: 
          p "{{evidence.newEvidence.evidence_body}}"
          h2.primary--text Link to Proof:
          a.white--text(
            target="_blank"
            :href="evidence.newEvidence.evidence_link"
            rel="noopener"
            :alt="evidence.newEvidence.evidence_title"
          )  {{evidence.newEvidence.evidence_link.slice(0,48)}} . . .
        v-divider
        v-card-title
          v-avatar.mr-3(
            slot="activator" 
            size="48px"
            )
            img(
              :src="evidence.author_image"
            )
          h4 Discovered by {{evidence.author_name}} on {{evidence.createdOn.seconds | moment("dddd, MMMM Do YYYY")}}
          v-spacer
          h4 Tip the Discoverer - {{evidence.newEvidence.evidence_tip}}
        v-divider
        truth-detector 
          
</template>

<script>
import { store } from '../store';
import truthDetector from '../components/truth-detector.vue'

export default {
  components: {
    truthDetector
  },
  data() {
    return {
      store
    };
  },
}
</script>

<style>
a { text-decoration: none;}
</style>

