<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      light
      app)
      h2 Top 5 Ways Crypto will Change the World
      v-list
        v-list-tile(
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact)
          v-list-tile-action
            span {{i+1}}
          v-list-tile-title(v-text="item.title")
    v-toolbar(fixed app :clipped-left="clipped")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn(
      )
        v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")
      v-btn(
      )
        v-icon web
      </v-btn>
      v-btn(
        icon
        @click.stop="fixed = !fixed"
      )
        v-icon remove
      nuxt-link(to="/" class="white--text" style="text-decoration: none;")
        v-toolbar-title(v-text="title")
      v-spacer
      v-btn(
        icon
        @click.stop="rightDrawer = !rightDrawer"
      )
        v-icon menu
    v-content
      v-container
    v-navigation-drawer(
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    )
      v-list
        v-list-tile(@click.native="right = !right")
          v-list-tile-action
            v-icon(light) compare_arrows
          v-list-tile-title Switch drawer (click me)
    v-footer(:fixed="fixed" app)
      span &copy; 2018 Crypto Catalyst
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
