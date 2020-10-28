<template>
  <v-row justify="center" align="center" class="d-flex flex-column justify-end">
    <v-col cols="12" sm="8" md="6">
      <div class="video-header">
        <div class="fond"></div>
        <video id="bgvid" playsinline autoplay muted loop poster="polina.jpg">
          <source src="~/assets/videoAMC2_2.mp4" type="video/mp4" />
          <!-- <source :sources="['/assets/videoAmc2.mov']" type="video/mov" /> -->
        </video>
        <div class="viewport-header">
          <h1 id="titre" primary--text>
            AMC2
            <span class="blanc"
              >Applications mécaniques au conditionnement carton</span
            >
          </h1>
          <div ref="fleche" class="fleche">
            <v-icon color="white" x-large>mdi-arrow-down-bold</v-icon>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default {
  mounted() {
    // gsap.registerPlugin(ScrollTrigger)
    // this.scrollAnimation()
    // this.$nextTick(() => {
    //   // When using $refs, must wait for nextTick
    //   const tl = this.$gsap.timeline({
    //     repeat: -1,
    //     ease: this.$gsap.Linear.easeInOut(2),
    //   })
    //   tl.to('.fleche', 1, { y: '10%' }) // With css selector
    //   tl.to(this.$refs.fleche, 0.5, { y: 0 }) // With refs
    // })
  },
  methods: {
    // scrollAnimation() {
    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: '.viewport-header',
    //         start: 'center center',
    //         end: 'bottom top',
    //         markers: false,
    //         scrub: true,
    //         pin: true,
    //       },
    //     })
    //     .to('#titre', { opacity: 0.5 })
    // },
  },
}
</script>
<style>
h1 {
  font-family: neue-haas-unica, sans-serif;
  font-weight: 800;
  font-style: normal;
  color: white;
  text-transform: uppercase;
  line-height: 1.2;
  font-size: 3vw;
  text-align: center;
}

h1 span {
  display: block;
  font-weight: 200;
}
#titre {
  width: 100%;
}
.video-header {
  position: absolute;
  text-align: center;
  width: 100vw;
  height: 100vh;
}

.video-header,
.video-header video,
.video-header .fond,
.video-header .viewport-header {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.video-header video {
  background: brown;
  -o-object-fit: cover;
  object-fit: cover;
}

.video-header .fond {
  background-color: #00579ec9;
  z-index: 9;
}

.video-header .viewport-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.viewport-header {
  flex-direction: column;
}
.fleche {
  margin-top: 100px;
}
</style>
