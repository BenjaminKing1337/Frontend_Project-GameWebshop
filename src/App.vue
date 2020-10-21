<template>
  <v-app>
    <v-main class="body">
      <Header></Header>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

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

.body{
  background: linear-gradient(map-get($Colorscheme, tertiary), map-get($Colorscheme, primary));
}
#center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
