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

<style lang="scss" scoped>
.body{
  background: linear-gradient(blue, black);
}
</style>
