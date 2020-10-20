<template>
  <div>
    <header>
      <div class="logo" id="center">
        <img src="../assets/logo.png" alt="logo" height="50px" />
      </div>

      <div>
        <v-menu open-on-hover top offset-y>
          <template  v-slot:activator="{ on, attrs }">
            <v-btn class="nav" color="black" dark v-bind="attrs" v-on="on">
              <v-icon color="red">menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <router-link tag="li" to="/home">
          <v-icon color="black">home</v-icon><br />Home
        </router-link>
        <router-link tag="li" to="/games">
          <v-icon color="black">videogame_asset</v-icon><br />Games
        </router-link>
        <router-link tag="li" to="/about">
          <v-icon color="black">info</v-icon><br />About
        </router-link>
        <router-link tag="li" to="/admin">
          <v-icon color="black">lock</v-icon><br />Admin
        </router-link>
        <router-link tag="li" to="/login">
          <v-icon color="black">login</v-icon><br />Login
        </router-link>
          </v-list>
        </v-menu>
        
      </div>

      <div class="checkout" id="center">
        <v-icon color="black">shopping_basket</v-icon>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.logo {
  min-width: 100px;
  background: linear-gradient(red, black);
  border-radius: 0 0 70px 0;
}
.nav {
  height: 60px !important;
  width: 300px;
  background: linear-gradient(red, black);
  border-radius: 0 0 70px 70px;
  list-style: none;
  text-align: center;
}
.theme--light.v-list {
  background-color: red;
  
}
.v-menu__content {
  text-align: center;
  list-style: none;
}
.checkout {
  min-width: 100px;
  background: linear-gradient(red, black);
  border-radius: 0 0 0 70px;
}

#center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>