<template lang="pug">
    v-container(fluid)
        v-layout(row wrap)
            v-flex
                v-card
                    v-card-title
                        h1 Liquid Democracy
                    v-card-text
                        h2 Definition
                        p Governance model defined by delegation. A  highly accurate, truthful voting system that allows participants to adjust the granularity of their votes dependent upon their personal experience, opinion, and expertise.  Participants may choose to vote on any or all proposals, delegate their votes to other participants, or abstain from voting on any proposals.  Votes may also be weighted by quantitative qualities such as ownership, participation, attention, reward, luck, or any other useful logic. 
                        h2 Crypto Effect
                        p Crypto provides a mechanism to record votes, ensure voting logic is strictly followed, determine participation, and safely delegate power to appropriate authority.
                        h2 Reaction Types
                        ul
                            li Project Level
                            li Organization Level
                            li Government Level
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
                            :items="evidence"
                            :search="search"
                        )
                            template(slot="items" slot-scope="props")
                                td.py-2 
                                    h4 {{ props.item.newEvidence.evidence_title }}
                                td {{ props.item.newEvidence.evidence_type }}
                                td {{ props.item.newEvidence.evidence_way }}
                                td {{ props.item.newEvidence.evidence_body }}
                                td 
                                    v-btn(:href="props.item.newEvidence.evidence_link" target="_blank" rel="noopener") See for Yourself
                                td 
                                    v-img(:src="props.item.author_image" height="40px" width="40px")
                            v-alert(slot="no-results" :value="true" color="error" icon="warning") Your search for "{{ search }}" found no results.

</template>

<script>
import { store } from '../store';
export default {
    data () {
        return {
            store,
            search: '',
            headers: [
            {
                text: 'Title',
                align: 'left',
                sortable: false,
                value: 'props.item.newEvidence.evidence_title'
            },
            { text: 'Proof Type', value: 'props.item.newEvidence.evidence_type' },
            { text: 'Proof Way', value: 'props.item.newEvidence.evidence_way' },
            { text: 'Excerpt', value: 'props.item.newEvidence.evidence_body' },
            { text: 'Link', value: 'props.item.newEvidence.evidence_link' },
            { text: 'Finder', value: 'props.item.author_image' }
        ]
        }
    },
    computed: {
        evidence () {
            return this.store.evidenceInFeed.filter(function (evidence) {
                return evidence.newEvidence.evidence_way === "Liquid Democracy"
            })
        }
    }
}
</script>

