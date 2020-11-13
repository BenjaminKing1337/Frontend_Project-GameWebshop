<template>
  <div>
    <v-container class="pb-0">
      <loader v-if="loading"></loader>
      <v-layout row wrap class="mt-2" v-if="!loading">
        <v-flex xs12>
          <v-carousel
            height="auto"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            style="cursor: pointer"
            id="carousel"
            class="rounded-lg"
          >
            <v-carousel-item
              v-for="slide in slideshow"
              :key="slide.id"
              @click="onClickSlide(slide.id)"
            >
              <v-img
                class="align-end"
                height="100%"
                :aspect-ratio="16 / 9"
                :src="slide.imageUrl"
              >
                <v-card-title style="background-color: #00000099">{{
                  slide.title
                }}</v-card-title>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="games" v-if="!loading">
      <h1 id="tCol">Top Selling Games</h1>
      <div class="cards">
        <v-card
          v-for="slide in slideshow"
          :key="slide.id"
          max-width="288"
          class="ma-2 mb-5"
          id="card"
          @click="onClickSlide(slide.id)"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="slide.imageUrl"
          >
            <v-card-title class="text-caption font-weight-bold">{{
              slide.title
            }}</v-card-title>
          </v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    slideshow() {
      return this.$store.getters.slideShow;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    onClickSlide(id) {
      this.$router.push("/games/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.games {
  height: auto;
  text-align: center;
}
.cards {
  /* display: flex;
    flex-wrap: wrap;
     */
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
#card {
  justify-self: center;
  position: relative;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    filter: grayscale(0.6);
  }
}
#tCol {
  color: map-get($Colorscheme, textaccent) !important;
}

@media only screen and (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 760px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
