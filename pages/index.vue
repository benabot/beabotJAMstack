<template>
  <v-container fluid>
    <Header />
    <div id="principal">
      <section>
        <div class="over-section1">
          <img class="carton" src="/carton.svg" alt="caton" />
          <svg
            id="Calque_1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xml:space="preserve"
          >
            <g>
              <line class="st0 ligne1" x1="50%" y1="0%" x2="50%" y2="10%" />
              <line class="st0 ligne2" x1="111%" y1="10%" x2="50%" y2="10%" />
              <line class="st0 ligne3" x1="111%" y1="10%" x2="111%" y2="100%" />
            </g>
          </svg>
        </div>
        <v-container>
          <v-row class="mb-8" no-gutters>
            <v-col md="3" offset-md="2">
              <h2 class="primary--text titre2">AMC2 industrie</h2>
            </v-col>
          </v-row>
          <v-row class="mb-6" no-gutters>
            <v-col md="12" offset-md="3">
              <p>
                Montana is a western state defined by its diverse terrain
                ranging from the Rocky Mountains to the Great Plains. Its
                wide-open spaces include Glacier National Park, a vast
                wilderness preserve that passes into Canada. The park’s many
                snow-capped peaks, lakes and alpine hiking trails are showcased
                along its famed Going-to-the-Sun Road, stretching 50 miles.
              </p>
              <p>
                Montana is a western state defined by its diverse terrain
                ranging from the Rocky Mountains to the Great Plains. Its
                wide-open spaces include Glacier National Park, a vast
                wilderness preserve that passes into Canada. The park’s many
                snow-capped peaks, lakes and alpine hiking trails are showcased
                along its famed Going-to-the-Sun Road, stretching 50 miles.
              </p>
            </v-col>
          </v-row>
          <v-row class="mb-12" align="center" justify="center">
            <v-btn
              class=""
              elevation="4"
              large
              outlined
              color="primary"
              href="/amc2-entreprise"
              >Notre ADN</v-btn
            >
          </v-row>
        </v-container>
      </section>
      <section id="solutions">
        <v-container>
          <v-row class="mb-14 mt-11" align="center" justify="center">
            <h2 class="white--text titre3">AMC2 : solutions</h2>
          </v-row>
          <v-row class="mb-8" no-gutters>
            <v-col md="5" offset-md="1">
              <v-card class="carteMachine1" elevation="6" outlined>
                <v-row>
                  <v-col md="8">
                    <v-card-title>Nos machines</v-card-title>
                    <v-card-text>
                      Montana is a western state defined by its diverse terrain
                      ranging from the Rocky Mountains to the Great Plains. Its
                      wide-open spaces include Glacier National Park.
                    </v-card-text>
                  </v-col>
                  <v-col class="machine" md="4">
                    <v-img src="/Etuyeuse-amc2.png" contain></v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mb-14" no-gutters>
            <v-col md="5" offset-md="6">
              <v-card class="carteMachine2" elevation="5" outlined>
                <v-row>
                  <v-col md="8">
                    <v-card-title>Vos produits</v-card-title>
                    <v-card-text>
                      Montana is a western state defined by its diverse terrain
                      ranging from the Rocky Mountains to the Great Plains. Its
                      wide-open spaces include Glacier National Park.
                    </v-card-text>
                  </v-col>
                  <v-col class="machine" md="4">
                    <v-img src="/AMC2_Verre.png" contain></v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mb-12" align="center" justify="center">
            <v-btn
              class="monBoutonBlanc"
              elevation="4"
              large
              outlined
              color="primary"
              href="/machines"
              >Découvrir nos solutions</v-btn
            >
          </v-row>
        </v-container>
      </section>
      <section>
        <v-container>
          <v-row class="mb-14 mt-11" align="center" justify="center">
            <h2 class="primary--text titre4">AMC2 : actualité</h2>
          </v-row>
          <v-divider></v-divider>
          <v-row v-for="post in posts" :key="post.id" class="article post">
            <v-col
              class="d-flex align-content-center flex-wrap mt-0 pt-0"
              cols="3"
              md-3
              ><v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                contain
                src="https://picsum.photos/id/11/500/300"
              ></v-img
            ></v-col>
            <v-col class="mt-0 pt-0" cols="9" md-9>
              <v-row>
                <v-col
                  ><h3>
                    {{ post.title.rendered }}
                  </h3></v-col
                >
                <v-col
                  ><small class="date">{{ post.date }}</small></v-col
                >
              </v-row>
              <v-row class="d-flex align-content-end flex-wrap">
                <v-col cols="10" md-10
                  ><p v-html="post.excerpt.rendered"></p
                ></v-col>
                <v-col class="d-flex align-content-end flex-wrap" cols="2" md-2
                  ><a :href="`blog/${post.slug}`" class="readmore"
                    ><v-icon class="mb-4">mdi-arrow-right</v-icon></a
                  ></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </v-container>
</template>

<script>
// import AppMasthead from "@/components/AppMasthead.vue";
import Header from '~/components/Header.vue'

export default {
  components: {
   // AppMasthead,
    Header,
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active"
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts;
      return this.posts.filter(el => el.tags.includes(this.selectedTag));
    }
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id;
      } else {
        this.selectedTag = null;
      }
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow-x: hidden;
}

html {
  font-family: neue-haas-unica, sans-serif;
  font-weight: 400;
  font-style: normal;
  // font-size: 150%;
  line-height: 1.4;
}

body {
  margin: 0;
}

#principal {
  background: white;
  position: relative;
  padding-top: 1rem;
  margin-top: 90vh;
  z-index: 11;
}

#principal::before {
  content: '';
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  top: -100vh;
}

#principal p {
  max-width: 600px;
}

#principal section {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#principal section:nth-child(even) {
  background: rgb(2, 118, 185);
  background: linear-gradient(
    115deg,
    rgba(2, 118, 185, 1) 0%,
    rgba(2, 99, 167, 1) 39%,
    rgba(0, 87, 158, 1) 100%
  );
  color: white;
}
#principal section:nth-child(2) {
  background: url('/AMC2_top-load-BLANC.svg'),
    linear-gradient(
      115deg,
      rgba(2, 118, 185, 1) 0%,
      rgba(2, 99, 167, 1) 39%,
      rgba(0, 87, 158, 1) 100%
    );
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-blend-mode: overlay;
}
.over-section1 {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.carton {
  width: 23%;
  position: absolute;
  right: 0;
  top: 15%;
  opacity: 0.2;
}
.st0 {
  fill: none;
  stroke: #7c7c7b;
  stroke-width: 0.05;
}
.machine {
  display: flex;
  justify-content: center;
}
h3,
small {
  color: #757575;
}
.article {
  border-top-width: 0.6px;
  border-top-style: solid;
  padding-top: 0.694444444444444vw;
}
</style>
