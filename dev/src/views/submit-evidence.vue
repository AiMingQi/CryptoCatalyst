<template lang="pug">
  v-card.pa-3
    v-form(
      ref="form"
      v-model="valid"
      lazy-validation
    )
      v-select(
        :items="ways"
        label="5 Ways"
        v-model="evidence_way"
        required
      )
      v-select(
        :items="types"
        label="Type of Evidence"
        v-model="evidence_type"
        required
      )
      v-text-field(
        v-model="evidence_title"
        :rules="evidence_titleRules"
        label="Title"
        required
      )
      v-text-field(
        v-model="evidence_body"
        :rules="evidence_bodyRules"
        label="Excerpt of Evidence"
        required
      )
      v-text-field(
        v-model="evidence_link"
        :rules="evidence_linkRules"
        label="Link to Proof"
        required
      )
      v-btn(
        :disabled="!valid"
        @click="submitEvidence"
      ) Submit
      v-btn(@click="clear") clear



</template>

<script>
import { store } from '../store';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data: () => ({
    ways: [
      'Liquid Democracy',
      'Instant Money',
      'Democratized VC',
      'Supply Chain Transparency',
      'Historical Records'
    ],
    types: [
      'Hard Evidence',
      'Useful Definition or Clarity Point',
      'Future Potential - Highly Feesible'
    ],
    evidence_way: '',
    valid: true,
    evidence_title: '',
    evidence_titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 100) || 'Title must be less than 100 characters'
    ],
    evidence_body: '',
    evidence_bodyRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 600) || 'Description must be less than 600 characters'
    ],
    evidence_link: '',
    evidence_linkRules: [
      v => !!v || 'Link to Proof is required',
      v => (v && v.length <= 180) || 'Link must be less than 180 characters'
    ]
  }),
  methods: {
    submitEvidence () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        store.writeEvidence(this.newEvidence);
        console.log('trying to send')
        console.log(this.newEvidence)
        this.$refs.form.reset()
        this.$router.push('/all-evidence')
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  computed: {
  newEvidence () {
    return {
      evidence_title: this.evidence_title,
      evidence_body: this.evidence_body,
      evidence_link: this.evidence_link,
      evidence_way: this.evidence_way,
      evidence_type: this.evidence_type
    }
  }
}
}
</script>

