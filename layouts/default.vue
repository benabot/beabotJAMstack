<template>
  <v-app>
    <Contact v-model="dialog" />
    <v-app-bar
      :class="{ change_color: scrollPosition > 50 }"
      fixed
      app
      style="z-index: 50000"
    >
      <v-tabs align-with-title>
        <v-tab to="/"
          ><img src="~/assets/LOGO-AMC2-header.png" alt="logo" />
        </v-tab>
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          primary--text
          router
          exact
          v-text="item.title"
        ></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn elevation="2" outlined color="primary" @click.stop="dialog = true"
        >Contact</v-btn
      >
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// import AppNav from "~/components/AppNav.vue";
import Contact from '~/components/Contact.vue'

export default {
  components: {
    // AppNav,
    Contact,
  },
  data() {
    return {
      scrollPosition: null,
      drawer: false,
      fixed: false,
      dialog: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Entreprise',
          to: '/amc2-entreprise',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Nos machines',
          to: '/machines',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vos produits',
          to: '/produits',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Actualité',
          to: '/actualite',
        },
      ],
    }
  },
};
</script>

<style>
html,
#app {
  font-family: neue-haas-unica, sans-serif;
}
.v-app-bar .v-tab,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  font-family: neue-haas-unica, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #00579e;
}
button {
  font-family: neue-haas-unica, sans-serif;
}
.container {
  width: 100vw;
  padding: 0;
}
/* .change_color {
  background-color: red !important;
  transition: background-color 2000ms linear;
} */
h2 {
  font-weight: 800;
  font-size: 2.75vw;
  line-height: 1.1;
}
p {
  font-weight: 200;
}
.monBoutonBlanc {
  background-color: white;
  border: 1px #00579e;
}
</style>
