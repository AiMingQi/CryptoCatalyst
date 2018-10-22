<template lang="pug">
  v-card
    v-form(
      ref="form"
      v-model="valid"
      lazy-validation
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
        label="Description of Evidence"
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
    valid: true,
    evidence_title: '',
    evidence_titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    evidence_body: '',
    evidence_bodyRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    evidence_link: '',
    evidence_linkRules: [
      v => !!v || 'Link to Proof is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    submitEvidence () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        store.writeEvidence(this.newEvidence);
        console.log('trying to send')
        console.log(this.newEvidence)
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
      evidence_link: this.evidence_link
    }
  }
}
}
</script>

