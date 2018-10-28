<template lang="pug">
  v-card.mt-3
    v-card-title
      h1.primary--text The Evidence
    v-divider
      //- v-spacer
      //- v-text-field(
      //-     v-model="search"
      //-     append-icon="search"
      //-     label="Search"
      //-     hide-details
      //- )
    //- v-card-text
    //-   v-data-table(
    //-     :headers="headers"
    //-     :items="store.evidenceInFeed.filter(function (evidence) { return evidence.newEvidence.evidence_way === $props.currentWay })"
    //-     :search="search"
    //-     :key="store.evidenceInFeed.id"
    //-   )
    //-     template(slot="items" slot-scope="props")
    //-       td.py-2 
    //-         h4.primary--text {{ props.item.newEvidence.evidence_title }}
    //-       td {{ props.item.newEvidence.evidence_way }}
    //-       td {{ props.item.newEvidence.evidence_type }}
    //-       td
    //-         v-btn(@click.stop="$set(dialogNote, props.item.id, true)" color="secondary" dark) Read Excerpt
    //-         v-dialog(v-model="dialogNote[props.item.id]" max-width="600")
    //-           v-card
    //-             v-card-title.headline.primary--text {{ props.item.newEvidence.evidence_title }}
    //-             v-card-text {{ props.item.newEvidence.evidence_body }}
    //-             v-card-actions
    //-               v-spacer
    //-               v-btn(color="green darken-1" flat @click.stop="$set(dialogNote, props.item.id, false)") Close
    //-       td 
    //-         v-btn(:href="props.item.newEvidence.evidence_link" target="_blank" rel="noopener") See for Yourself
    //-       td 
    //-         v-img(:src="props.item.author_image" height="40px" width="40px")
    //-     v-alert(slot="no-results" :value="true" color="error" icon="warning") Your search for "{{ search }}" found no results.
    v-card-text
      v-timeline
        v-timeline-item(
          v-for="n in store.evidenceInFeed.filter(function (evidence) { return evidence.newEvidence.evidence_way === $props.currentWay })"
        :key="n.id"
        color="primary"
        dense
        light
        )
          span(slot="icon")
            v-img(:src="n.author_image" height="60px" width="60px")
          span(slot="opposite") 
            h3 {{n.newEvidence.evidence_type}}
          v-card.elevation-2
            v-card-title 
              h2.secondary--text {{n.newEvidence.evidence_title}}
            v-card-text 
              strong {{n.newEvidence.evidence_body}}
              v-btn.mt-4(:href="n.newEvidence.evidence_link" target="_blank" rel="noopener" block color="secondary") See for Yourself


</template>


<script>
import { store } from '@/store';
export default {
    props: ['currentWay'],
    data () {
        return {
          search: '',
          dialog: false,
          dialogNote: {},
          headers: [
            {
              text: 'Title',
              align: 'left',
              sortable: false,
              value: 'props.item.newEvidence.evidence_title'
          },
          { text: 'Proof Way', sortable: false, value: 'props.item.newEvidence.evidence_way' },
          { text: 'Proof Type', sortable: false, value: 'props.item.newEvidence.evidence_type' },
          { text: 'Excerpt', sortable: false, value: 'props.item.newEvidence.evidence_body' },
          { text: 'Link', sortable: false, value: 'props.item.newEvidence.evidence_link' },
          { text: 'Finder', sortable: false, value: 'props.item.author_image' }
        ],
        store
        }
    }
}
</script>

