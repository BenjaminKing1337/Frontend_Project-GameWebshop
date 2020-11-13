<template>
  <v-app>
    <v-main class="body">
      <Header></Header>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./src/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

.body {
  background: linear-gradient(to top, map-get($Colorscheme, bg1) 0%, map-get($Colorscheme, bg1) 1%, map-get($Colorscheme, bg2) 100%);
  font-family: "Source Sans Pro", sans-serif;
}

.v-card {
  background-color: map-get($Colorscheme, cards) !important;
}

h1, p {
color: map-get($Colorscheme, maintext) !important;
}
#yBtn {
  background-color: map-get($Colorscheme, yes);
}
#nBtn {
  background-color: map-get($Colorscheme, no);
}
</style>
