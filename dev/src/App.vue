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
      v-img(src="/banner-logo.png" max-height="100px" height="100px" contain position="left")
      v-spacer
      h2 Where the Reaction is Taking Place
      v-spacer
      v-btn(to="/" icon flat)
        v-icon home
    v-content
      v-container
        router-view
    v-footer(:fixed="fixed" app)
      span.ml-5 &copy; 2018 Crypto Catalyst
      v-spacer
      v-btn(@click.prevent="signInWithGoogle") Login
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
    },
    methods: {
      signInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
      }
    }
  }
</script>
<style scoped>



.banner {
  background: url('/banner-bg.png');
  background-repeat: repeat-x;
  }
</style>

<style>

p {
  font-size: 16px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>

