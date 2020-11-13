<template>
  <v-layout row wrap>
    <v-flex xs12 class="text-center">
      <v-progress-circular
        id="load"
        indeterminate
        :width="7"
        :size="70"
      ></v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#load {
  color: map-get($Colorscheme, loader);
}
</style>