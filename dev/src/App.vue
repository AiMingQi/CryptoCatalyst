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
              strong {{i+1}}
            v-list-tile-title.index_title(v-text="item.title")
      v-img.ml-2(src="/banner-logo.png")
    v-toolbar.ma-1.banner(fixed app :clipped-left="clipped" height="100px")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-img.hidden-sm-and-down(src="/banner-logo.png" max-height="100px" height="100px" min-height="100px" contain position="left")
      h3 Where the Reaction is Taking Place
      v-spacer
      v-btn(to="/" icon flat)
        v-icon home
    v-content
      v-container
        router-view
    v-footer(:fixed="fixed" app)
      span.ml-5 &copy; 2018 Crypto Catalyst 
      //- span.ml-5 {{store.currentUser.displayName}}
      v-spacer
      v-btn(@click.prevent="signInWithGoogle" v-if="store.currentUser == null") Login
      

</template>

<script>
import { store } from '@/store';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data () {
    return {
      store,
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
.index_title { font-size: 1.1em; }

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

