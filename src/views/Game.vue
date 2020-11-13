<template>
  <div>
    <loader v-if="loading"></loader>
    <v-layout v-else>
      <v-card class="mx-auto my-10 pa--1" max-width="90%">
        <v-icon @click="goBack" id="close" x-large>clear</v-icon>
        <v-img
          id="border"
          class="white--text align-end"
          height="auto"
          :src="game.imageUrl"
        >
          <v-card-title style="background-color: #00000099">{{
            game.title
          }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">
          <div>{{ game.genre }}</div>
          <div class="font-weight-medium">{{ game.platform }}</div>
        </v-card-subtitle>
        <v-card-title> <h2> About</h2> </v-card-title>
        <v-card-text>
          <p>{{ game.description }}</p>
        </v-card-text>
        <v-card-title> <h2> Video </h2> </v-card-title>
        <div class="resp-container">
          <iframe
            id="border"
            class="resp-iframe"
            :src="game.videoUrl"
            allowfullscreen
            gesture="media"
            allow="encrypted-media"
          ></iframe>
        </div>
        <v-card-text
          id="pCol"
          class="font-weight-black text-h4 text-center pt-10"
        >
          {{ game.price }} kr.
          <v-btn class="center-text" @click="addToBasket(game)" id="btn">
            Add
            <v-icon id="iCol" class="mx-auto my-auto">shopping_basket</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basketDump: [],
    };
  },
  props: ["id"],
  computed: {
    game() {
      return this.$store.getters.loadedGame(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    addToBasket(game) {
      this.basketDump.push({
        title: game.title,
        price: game.price,
        quantity: 1,
      });
      this.$store.commit("addBasketItems", this.basketDump);
      this.basketDump = [];
    },
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
#close {
  position: absolute;
  z-index: 2;
  background-color: #424242;
  color: map-get($Colorscheme, icons);
  border-radius: 50px;
  margin: -15px 0 0 -15px;
}
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  .resp-iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 85%;
    border: 0;
  }
}
#btn,
#btn1 {
  height: 50px !important;
  width: 88px !important;
}
#border {
  border: 11px solid map-get($Colorscheme, textaccent);
  border-radius: 5px 5px 0 0;
}
#pCol {
  color: map-get($Colorscheme, textaccent);
}
#btn {
  background-color: map-get($Colorscheme, textaccent);
  color: map-get($Colorscheme, icons);
}
#iCol {
  color: map-get($Colorscheme, icons);
}
</style>