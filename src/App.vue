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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');


.body{
  background: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
  font-family: 'Source Sans Pro', sans-serif;
}

</style>
