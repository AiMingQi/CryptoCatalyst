<template lang="pug">
  v-card.mt-3
    v-card-title
      p The Evidence
      v-spacer
      v-text-field(
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
      )
    v-card-text
      v-data-table(
        :headers="headers"
        :items="store.evidenceInFeed.filter(function (evidence) { return evidence.newEvidence.evidence_way === $props.currentWay })"
        :search="search"
      )
        template(slot="items" slot-scope="props")
          td.py-2 
            h4 {{ props.item.newEvidence.evidence_title }}
          td {{ props.item.newEvidence.evidence_way }}
          td {{ props.item.newEvidence.evidence_type }}
          td {{ props.item.newEvidence.evidence_body }}
          td 
            v-btn(:href="props.item.newEvidence.evidence_link" target="_blank" rel="noopener") See for Yourself
          td 
            v-img(:src="props.item.author_image" height="40px" width="40px")
        v-alert(slot="no-results" :value="true" color="error" icon="warning") Your search for "{{ search }}" found no results.
</template>


<script>
import { store } from '@/store';
export default {
    props: ['currentWay'],
    data () {
        return {
          search: '',
            headers: [
              {
                text: 'Title',
                align: 'left',
                sortable: false,
                value: 'props.item.newEvidence.evidence_title'
            },
            { text: 'Proof Way', value: 'props.item.newEvidence.evidence_way' },
            { text: 'Proof Type', value: 'props.item.newEvidence.evidence_type' },
            { text: 'Excerpt', value: 'props.item.newEvidence.evidence_body' },
            { text: 'Link', value: 'props.item.newEvidence.evidence_link' },
            { text: 'Finder', value: 'props.item.author_image' }
        ],
        store
        }
    }
}
</script>

