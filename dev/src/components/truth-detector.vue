<template lang="pug">
  v-card
    v-card-title
      V-icon(v-show="totallyTrue === true") check
      v-btn(color="secondary" @click.prevent="setTotallyTrue") Totally True
      v-spacer
      p -- Validate --
      v-spacer
      V-icon(v-show="totallyTrue === false") check
      v-btn(color="black" @click.prevent="setFakeNews") Fake News
</template>

<script>
export default {
  data () {
    return {
      totallyTrue: null
    }
  },
  methods: {
    setTotallyTrue () {
      this.totallyTrue = true
      console.log('true')
    },
    setFakeNews () {
      this.totallyTrue = false
      console.log('fake')
    }
  }
}
</script>

