<template lang="pug">
  v-container
    v-layout(row wrap)
      v-flex(xs12)
        v-card.pa-3()
          h1 Behind the Curtain
          p The main purpose of Crypto-Catalyst is to learn.  So this is where you come to find explanations for the ways in which we integrate Crypto into the experience here and how to get started using those things for yourself.
        v-card.my-3(v-for="scene in scenes")
          v-card-title.primary--text
            h1 {{scene.title}}
          v-card-text
            div(v-html="scene.description")
            v-btn.mt-5(:to="scene.link" block large) Visit Example


</template>

<script>
export default {
  data () {
    return {
      scenes: [ 
        {
          title: "uPort Identity to Sign Our Distinguished Guest Book",
          description: "<p>We are using uPort identity server to verify a  user's identity, ensure their uniqueness, allow that user to safely share their information with us, and verify that user upon their return. The record of the visit is currently being stored in Firebase, our Google based database. </p><p>In the future we will use the blockchain as a data source, but it is difficult to beat free*.  It would currently cost the gas price to record each article, which is only a few cents, but it ads up.  We are looking forward to doing an analysis on the actual cost of Google vs the cost of using the Ethereum Virtual Machine for example. This seems like a more useful comparison than ETH/USD.</p><p>* Turns out free doesn't scale very well and soon we will be forced to pay to use Google.  So we are looking forward to doing an analysis at where those crossover points are.</p>",
          link: "/"
        },
        {
          title: "uPort to Submit Time",
          description: "",
          link: "/time-submission"
        },
        {
          title: "AdEx for ads",
          description: "",
          link: "/"
        },
        {
          title: "Aragon for governance",
          description: "",
          link: "/liquid-democracy"
        },
        {
          title: "Aragon for CCR token creation",
          description: "",
          link: "/liquid-democracy"
        }
      ]
    }
  }
}
</script>

