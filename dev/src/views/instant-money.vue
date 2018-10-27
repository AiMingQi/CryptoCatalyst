<template lang="pug">
v-container(fluid)
        v-layout(row wrap)
            v-flex(xs12)
                v-card
                    v-card-title
                        h1 Instantaneous Low Fee Global Micro Transactions
                    v-card-text
                        h2 Definition
                        p Trust is the most expensive part of a transaction.
                        h2 Crypto Effect
                        p Crypto creates a central store of truth that we can potentially access universally, given a big enough network. Keeping track of the value of things and being able to exchange them is one of the fundamental building blocks of a functioning society.  The faster, easier, and more trustworthy our economic systems become the faster we will develop as a species.
                        h2 Reaction Types
                        ul
                            li Value Type Conversions
                            li Purchasing Goods
                            li Purchasing Services
                            li Remittance
                            li Escrow
                evidence-table(currentWay="Instant Money")
</template>

<script>
import evidenceTable from '@/components/evidence-table'
export default {
    components: {
        evidenceTable
    }
}
</script>

