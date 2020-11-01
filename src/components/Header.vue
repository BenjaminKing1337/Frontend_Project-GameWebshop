<template>
  <div>
    <header v-if="!$route.meta.hide">
      <div class="logo" id="center">
        <router-link to="/">
          <v-icon class="ml-5 mt-2" color="black" x-large>account_circle</v-icon>
        </router-link>
      </div>

      <div>
        <v-btn @click="drawer = !drawer" class="nav" color="black">
          <v-icon class="icon" color="black">menu</v-icon>
        </v-btn>

        <p class="dropdownOpen" v-show="drawer" >
          <v-list>
            <router-link tag="li" to="/home">
              <v-icon class="icon" color="black">home</v-icon><br />Home
            </router-link>
            <router-link tag="li" to="/games">
              <v-icon class="icon" color="black">videogame_asset</v-icon
              ><br />Games
            </router-link>
            <router-link tag="li" to="/about">
              <v-icon class="icon" color="black">info</v-icon><br />About
            </router-link>
            <router-link tag="li" to="/admin">
              <v-icon class="icon" color="black">lock</v-icon><br />Admin
            </router-link>
            <router-link tag="li" to="/Signup">
              <v-icon class="icon" color="black">login</v-icon><br />SignUp
            </router-link>
            <router-link tag="li" to="/login">
              <v-icon class="icon" color="black">login</v-icon><br />LogIn
            </router-link>
            <div class="dpCloseBtn" tag="li" @click="drawer = !drawer">
              <v-icon class="icon material-icons md-48" color="red">menu</v-icon>
            </div>
          </v-list>
        </p>
      </div>

      <div class="checkout" id="center">
        <v-icon class="ml-9 mt-2" color="black" x-large>shopping_basket</v-icon>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.logo {
  min-width: 100px;
  background: linear-gradient(map-get($Colorscheme, secondary), map-get($Colorscheme, primary));
  border-radius: 0 0 70px 0;
}
.nav {
  height: 60px !important;
  width: 300px;
  background: linear-gradient(map-get($Colorscheme, secondary), map-get($Colorscheme, primary));
  border-radius: 0 0 70px 70px;
  list-style: none;
  text-align: center;
}
.theme--light.v-list {
  background: linear-gradient(map-get($Colorscheme, secondary), map-get($Colorscheme, primary));
  text-align: center;
  list-style: none;
  border-radius: 0 0 70px 70px;
  margin-top: -60px;
  z-index: 2;
}
.dropdownOpen {
  position: relative;
  z-index: 999;
}
.dpCloseBtn {
  padding: 20px;
  height: 50px;
  border: none !important;
  background: none !important;
  border-radius: 0 0 70px 70px;
  font-size: 5px;
}
.checkout {
  min-width: 100px;
  background: linear-gradient(map-get($Colorscheme, secondary), map-get($Colorscheme, primary));
  border-radius: 0 0 0 70px;
}
.dpCloseBtn:hover {
  background-color:map-get($Colorscheme, primary) !important;
  .icon {
    color:map-get($Colorscheme, secondary) !important;
  }
}
li:hover {
  background-color: black;
  color:map-get($Colorscheme, secondary);
  .icon {
    color:map-get($Colorscheme, secondary) !important;
  }
}
a{
  text-decoration: none;
}
</style>