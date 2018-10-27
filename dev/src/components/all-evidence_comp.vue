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
          h1.primary--text {{evidence.newEvidence.evidence_title}} <br>
        v-card-text 
          h2.primary--text Proof Type: 
          h2 {{evidence.newEvidence.evidence_way}}
          h3 {{evidence.newEvidence.evidence_type}}
          br
          h2.primary--text Excerpt or Description: 
          p "{{evidence.newEvidence.evidence_body}}"
          h2.primary--text Link to Proof:
          v-btn(
            block
            target="_blank"
            :href="evidence.newEvidence.evidence_link"
            rel="noopener"
            :alt="evidence.newEvidence.evidence_title"
            color="secondary"
            ) Visit the Evidence
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
          //- v-spacer
          //- h4 Tip the Discoverer - {{evidence.newEvidence.evidence_tip}}
        v-divider
        //- truth-detector(:evidence_id="evidence.id") 
          
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

