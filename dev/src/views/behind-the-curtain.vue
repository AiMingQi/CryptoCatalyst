<template lang="pug">
  v-container
    v-layout(row wrap)
      v-flex(xs12)
        v-card.pa-3()
          v-card-title
            v-icon memory
            h1.ml-2 Behind the Curtain
          v-card-text
            p The main purpose of Crypto-Catalyst is to learn.  So this is where you come to find explanations for the ways in which we integrate Crypto into the experience and how to get started using those things for yourself.
        v-card.my-3(v-for="scene in scenes")
          v-card-title.primary--text
            h1 {{scene.title}}
          v-card-text
            div(v-html="scene.description")
            v-btn.mt-5(:to="scene.exampleLink" block large) Visit Example
            v-btn(color="secondary" :href="scene.vendorLink" target="_blank" rel="noopener" block large) Our Vendor
        v-card.mt-4.pa-4()
          p.text-xs-center Decentralized Ad
          div.text-xs-center
            iframe.text-xs-center.mx-auto(src="https://view.adex.network?width=300&height=250&slotId=5bf2fa911b1d40001c55541f&slotIpfs=QmYbkwHHzWhPK4K5kfgP9yYkM3DTDLnAdBqWBBETpuJUZp&fallbackImgIpfs=Qmd9x81x4vSg7CptDqM8SPbhCRtGabEUWrWGKTAadn6dZc&fallbackUrl=https%3A%2F%2Fwww.adex.network%2F"
              width="299"
              height="249"
              scrolling="no"
              frameBorder="0"
              style="border: 0;"
            )
          p.text-xs-center Please click the Unicorn


</template>

<script>
export default {
  data () {
    return {
      scenes: [ 
        {
          title: "uPort Identity to Sign Our Distinguished Guest Book",
          description: "<p>We are using uPort identity server to verify a user's identity, ensure their uniqueness, allow that user to safely share their information with us, and verify that user upon their return. The record of the visit is currently being stored in Firebase, our Google based database. </p><p>In the future we will use the blockchain as a data source, but it is difficult to beat free*.  It would currently cost the gas price to record each article, which is only a few cents, but it ads up.  We are looking forward to doing an analysis on the actual cost of Google vs the cost of using the Ethereum Virtual Machine for example. This seems like a more useful comparison than ETH/USD.</p><p>* Turns out free doesn't scale very well and soon we will be forced to pay to use Google.  So we are looking forward to doing an analysis at where those crossover points are.</p>",
          exampleLink: "/",
          vendorLink: "https://www.uport.me/"
        },
        {
          title: "uPort to Submit Time",
          description: "<p>We are using uPort identity server to verify a user's identity, ensure their uniqueness, allow that user to safely share their information with us, and verify that user upon their return. The record of the visit is currently being stored in Firebase, our Google based database. </p>",
          exampleLink: "/time-submission",
          vendorLink: "https://www.uport.me/"
        },
        {
          title: "AdEx for ads",
          description: "<p>AdEx is a decentralized exchange for ad units.  You can purchase ads directly from the advertiser.  Removing the middle man and in theory cutting out 40% of the cost.  You also get a more direct purchasing experience and protection against scams and bad advertising.</p>",
          exampleLink: "/",
          vendorLink: "https://www.adex.network/"
        },
        {
          title: "Aragon for governance",
          description: "<p>It is amazing that Aragon has built such a comlete governance package of Ethereum 'Smart Contracts'. It is exciting to be able to actually use the technology to employ governance.  The Liquid Democracy package is still in development and when it is live we will be utilizing it for governance for certain.</p><p>If you are interested in participating in our governance than you are welcome.</p>",
          exampleLink: "/liquid-democracy",
          vendorLink: "https://mainnet.aragon.org/#/cryptocatalyst.aragonid.eth/"
        },
        {
          title: "Aragon for CCR token creation",
          description: "<p>For every hour of work that you have committed to Crypto-Catalyst you will be rewarded* with 1 CCR** (Crypto-Catalyst-Reaction Token).</p><p>*Ownership and responsibility of control of the token once it is issued to you is completely up to you.</p><p>**The CCR (Crypto-Catalyst-Reaction) is an ERC20 token and requires a compatible ETH account to interact with it. MetaMask creates a web3 layer that will allow you to use the token to interact with our governance model at Aragon. If you receive the token at another Ethereum address you will probably not have the ability to use the token at Crypto-Catalyst at this time. If you would like to transfer the token to another party you will need to use a different type of wallet such as MyEtherWallet to complete the transfer. MetaMask doesn't support sending the token to other parties at this time.</p>",
          exampleLink: "/liquid-democracy",
          vendorLink: "https://mainnet.aragon.org/#/cryptocatalyst.aragonid.eth/"
        }
      ]
    }
  }
}
</script>

