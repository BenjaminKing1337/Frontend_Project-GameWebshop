<template>
  <div>
    <header v-if="!$route.meta.hide" elevate-on-scroll>
      <div class="logo" id="center">
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
  display: flex;
  justify-content: space-between;
}

.nav {
  height: 60px !important;
  width: 200px;
  background: linear-gradient(
    map-get($Colorscheme, secondary),
    map-get($Colorscheme, primary)
  );
  border-radius: 0 0 70px 70px;
  list-style: none;
  text-align: center;
}
.theme--light.v-list {
  background: linear-gradient(
    map-get($Colorscheme, secondary),
    map-get($Colorscheme, primary)
  );
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
.dpCloseBtn:hover {
  background-color: map-get($Colorscheme, primary) !important;
  .icon {
    color: map-get($Colorscheme, secondary) !important;
  }
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