<template lang="pug">
    v-container(fluid)
        v-layout(row wrap)
            v-flex(xs12)
                v-card
                    v-card-title
                        h1 Historical Records
                    v-card-text
                        h2 Definition
                        p A central store of truth is the foundation of any working system.  As we enlarge the silos of knowledge and truth, great human problems will be resolved.
                        h2 Crypto Effect
                        p Crypto provides a place to keep track of everything and a safe way to share that data without compromising privacy and security. 
                        h2 Reaction Types
                        ul 
                            li Gaming Records
                            li Gambling / Prediction Markets
                            li Ownership Records
                            li Certification Records
                            li Action Records
                            li Location Records
                            li State Records
                    evidence-table(currentWay="Historical Records")
</template>

<script>
import evidenceTable from '@/components/evidence-table'
export default {
    components: {
        evidenceTable
    }
}
</script>