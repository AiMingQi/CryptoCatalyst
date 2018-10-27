<template lang="pug">
    v-container(fluid)
        v-layout(row wrap)
            v-flex(xs12)
                v-card
                    v-card-title
                        h1 Democratized Venture Capital
                    v-card-text
                        h2 Definition
                        p Liquidity creates opportunity.  With the majority of the world population having no access to even small amounts of credit, innovation becomes a luxury.  
                        h2 Crypto Effect
                        p Crypto provides a platform for micro-lending and micro-investing on a global scale.  Joe Schmo in Iowa could loan money to Smirna Birna in Tonga and have a safe way to keep track of the progress.  The barrier to venture capital (innovation) will massively reduce. 
                        h2 Reaction Types
                        ul
                            li Micro-lending
                            li  Micro-investing
                            li Collateralization
                    evidence-table(currentWay="Democratized VC")
</template>

<script>
import evidenceTable from '@/components/evidence-table'
export default {
    components: {
        evidenceTable
    }
}
</script>
