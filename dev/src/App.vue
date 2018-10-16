<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      light
      app)
      v-card.pa-3(dark)
        h2 Top 5 Ways Crypto will Change the World
      v-list
        v-list-tile(
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
          )
            v-list-tile-action
              span {{i+1}}
            v-list-tile-title(v-text="item.title")
    v-toolbar.ma-1.banner(fixed app :clipped-left="clipped" height="100px")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-img(src="../assets/banner-logo.png" max-height="100px" height="100px" contain position="left")
      v-spacer
      v-btn(to="/" icon flat)
        v-icon home
    v-content
      v-container
        router-view
    v-footer(:fixed="fixed" app)
      span.ml-5 &copy; 2018 Crypto Catalyst
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { title: 'Liquid Democracy', to: '/liquid-democracy' },
          { title: 'Instant Money', to: '/instant-money' },
          { title: 'Democratized VC', to: '/democratized-vc' },
          { title: 'Supply Chain Transparency', to: '/supply-chain-transparency' },
          { title: 'Historical Records', to: '/historical-records' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Crypto Catalyst'
      }
    }
  }
</script>
