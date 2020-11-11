<template>
  <div>
    <header v-if="!$route.meta.hide" elevate-on-scroll>
      <div class="logo" id="center">
<<<<<<< HEAD
        <v-icon
          v-if="userIsAuthenticated"
          class="ml-5 mt-2"
          color="green"
          x-large
          >account_circle</v-icon
        >
        <v-icon v-else class="ml-5 mt-2" color="black" x-large
          >account_circle</v-icon
        >
      </div>

      <div>
        <v-btn @click="drawer = !drawer" class="nav" color="black">
          <v-icon class="icon" color="black">menu</v-icon>
        </v-btn>

        <p class="dropdownOpen" v-show="drawer">
          <v-list>
            <router-link
              tag="li"
              class="py-2"
              v-for="item in menuItems"
              :key="item.title"
              :to="item.link"
             
            >
              <v-icon class="icon" color="black">{{ item.icon }}</v-icon>
              <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </router-link>
            <div class="dpCloseBtn" tag="li" @click="drawer = !drawer">
              <v-icon class="icon material-icons md-48" color="red"
                >menu</v-icon
              >
            </div>
          </v-list>
        </p>
      </div>

      <div class="checkout" id="center">
        <v-icon class="mr-5 mt-2" color="black" x-large>shopping_basket</v-icon>
=======
          <v-icon v-if="userIsAuthenticated" class="ml-5 mt-2" color="teal accent-2" x-large>account_circle</v-icon>
          <v-icon v-else class="ml-5 mt-2" color="grey darken-3" x-large>account_circle</v-icon>
      </div>
      <v-menu
        transition="slide-y-transition"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="btn"
            color="teal accent-4"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon class="icon" color="black">menu</v-icon>
          </v-btn>
        </template>
        <v-card id="list" color="teal accent-4">
        <v-list>
          <v-list-item
            v-for="item in menuItems" :key="item.title" :to="item.link"
            
          >
            <v-icon class="icon"  color="blue lighten-5">{{item.icon}}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        </v-card>
      </v-menu>
      <div class="basket">
        <game-basket></game-basket>
>>>>>>> 698e63a78e6a10bc5478a2770b9e81516f7e1873
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "home", title: "Home", link: "/home" },
        { icon: "videogame_asset", title: "Games", link: "/games" },
        { icon: "info", title: "About", link: "/about" },
        { icon: "login", title: "LogIn", link: "/login" },
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "home", title: "Home", link: "/home" },
          { icon: "videogame_asset", title: "Games", link: "/games" },
          { icon: "info", title: "About", link: "/about" },
          { icon: "login", title: "LogIn", link: "/login" },
          { icon: "lock", title: "Admin", link: "/admin" },
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },

};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.logo{
  position: fixed;
}
.btn{
  width: 200px;
  height: 50px !important;
  border-radius: 0 0 70px 70px;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
}
#list{
  border-radius: 0 0 50px 50px;
}
.theme--light.v-list {
  text-align: center;
  z-index: 2;
  background-color: transparent;
} 
.v-menu__content{
  border-radius: 0 0 50px 50px;
  box-shadow: rgba(0,0,0,0.8) 0 0 10px;
  margin-top: -20px;
}
.basket{
  position: fixed;
  right: 0;
}



li:hover {
  background-color: black;
  color: map-get($Colorscheme, secondary);
  .icon {
    color: map-get($Colorscheme, secondary) !important;
  }
}
a {
  text-decoration: none;
}
</style>