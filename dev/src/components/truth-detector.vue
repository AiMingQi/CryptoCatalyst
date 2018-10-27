<template lang="pug">
  v-flex
    v-card
      v-card-title
        V-icon(v-show="totallyTrue === true") check
        v-btn(color="secondary" @click.prevent="setTotallyTrue") Totally True
        v-spacer
        p -- Validate --
        v-spacer
        V-icon(v-show="totallyTrue === false") check
        v-btn(color="black" @click.prevent="setFakeNews") Fake News
      v-card-text
        p {{evidence_id}}
</template>

<script>
import { store } from '../store';
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  props: ['evidence_id'],
  data () {
    return {
      totallyTrue: true,
      store
    }
  },
  methods: {
    setTotallyTrue () {
      if (this.totallyTrue === null) {
      this.totallyTrue = true
      store.voteOnEvidence(this.newVote);
      console.log('make true')} 
      else {
        this.totallyTrue = true
        console.log(this.totallyTrue)
        store.changeVoteOnEvidence(this.newVote)
      }
    },
    setFakeNews () {
      if (this.totallyTrue === null) {
      this.totallyTrue = false
      store.voteOnEvidence(this.newVote);
      console.log('make fake')}
      else {
        this.totallyTrue = false
        console.log(this.totallyTrue)
        store.changeVoteOnEvidence(this.newVote)
      }
    }
  },
  computed: {
    newVote () {
      return {
        totally_true: this.totallyTrue,
        evidence_id: this.evidence_id
      }
    },
    votes () {
      // return firebase.firestore().collection('votes')
    }
  }
}
</script>

