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
          h1.primary--text {{evidence.newEvidence.evidence_title}}
          v-spacer
          h2.ml-5  {{evidence.newEvidence.evidence_way}}
        v-card-text 
          h3 Proof Type: {{evidence.newEvidence.evidence_type}}
          br
          p <strong>Excerpt or Description: </strong> "{{evidence.newEvidence.evidence_body}}"
          p Link to Proof:
          a(
            target="_blank"
            :href="evidence.newEvidence.evidence_link"
          )  {{evidence.newEvidence.evidence_link}}
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

export default {
  data() {
    return {
      store
    };
  },
}
</script>
