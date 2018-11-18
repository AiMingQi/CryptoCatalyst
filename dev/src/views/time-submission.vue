<template lang="pug">
  v-container
    v-layout
      v-flex
        v-card
          v-card-title
            h1 Time Submission
          v-card-text
            P Please Enter Your Name
            v-text-field(v-model="name")
            P Please Enter a Description of the Reaction You Performed
            v-textarea(v-model="description")
            p Please Enter the Date of the Reaction
            v-date-picker(landscape reactive v-model="date")
            p Please Indicate How Much Time You Committed to the Reaction
            v-text-field(mask="##" label="In whole hours" v-model="time")
        v-card
          v-card-title
            h1 Thank You 
              span.primary--text {{name}}
          v-card-text
            h2 For committing 
              span.primary--text {{time}} 
              span Hrs of your precious life to the Reaction
            p.primary--text {{description}}
            h3 on 
              span.primary--text {{date}}
            P {{submission}}
          v-card-actions
            v-btn.black--text(@click.stop="submit" block large color="primary") Submit


</template>
<script>
  export default {
    data () {
      return {
        date: new Date().toISOString().substr(0, 10),
        name: '',
        description: '',
        time: 0
      }
    },
    methods: {
      submit () {
        alert('Submission Occurs')
      }
    },
    computed: {
      submission () {
        return {
        timesub_date: this.date,
        timesub_name: this.name,
        timesub_description: this.description,
        timesub_time: this.time
        }
      }
    }
  }
</script>