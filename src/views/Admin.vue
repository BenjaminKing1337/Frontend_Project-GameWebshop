<template>
  <div>
    <v-flex
    id="createNew"
      xs10
      sm6
      offset-sm3
      offset-xs1
      class="rounded-lg py-4"
    >
      <v-layout row>
        <v-flex xs8 sm6 offset-sm3 offset-xs4>
          <h4>Create a new Product</h4>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onAddProduct">
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
                  v-model="title"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <v-text-field
                  name="genre"
                  label="Genre"
                  id="genre"
                  v-model="genre"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <v-text-field
                  name="platform"
                  label="Platform"
                  id="platform"
                  v-model="platform"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <v-text-field
                  name="imageUrl"
                  label="Image URL"
                  id="image-url"
                  v-model="imageUrl"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <img :src="imageUrl" height="150" />
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <v-text-field
                  name="videoUrl"
                  label="Video URL"
                  id="video-url"
                  v-model="videoUrl"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <v-textarea
                  name="description"
                  label="Description"
                  id="description"
                  v-model="description"
                  multi-line
                  required
                ></v-textarea>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs2>
                <v-text-field
                  name="price"
                  label="Price"
                  id="price"
                  v-model="price"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs8 sm6 offset-sm3 offset-xs4>
                <v-btn
                  color="teal accent-4"
                  :disabled="!formIsValid"
                  type="submit"
                  class="white--text"
                >
                  Add Product
                </v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-flex>
    <loader v-if="loading"></loader>
    <v-layout v-else>
      <v-flex xs10 sm6 offset-sm3 offset-xs1>
        <input
          type="text"
          class="search pa-2 mt-2 rounded-t-lg"
          v-model="search"
          placeholder="Search Products"
        />
        <v-divider></v-divider>
        <v-simple-table
        id="products"
          class="mb-6 py-2 rounded-t-0 rounded-tr-lg rounded-b-lg"
          dense
        >
          <tbody>
            <tr v-for="game in filteredGames" :key="game.id" class="tr">
              <td>
                <span class="font-weight-bold">{{ game.title }}</span> <br />
                <span class="font-weight-light">{{ game.genre }}</span> <br />
                <span class="font-weight-light">{{ game.platform }}</span>
                <br />
                <span>{{ game.price }} DKK</span>
              </td>
              <td>
                <product-edit id="editIcon" :game="game"></product-edit>
              </td>
              <td>
                <v-btn text fab>
                  <v-icon id="delIcon"  @click="remove_products(game)"
                    >delete</v-icon
                  >
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      genre: "",
      platform: "",
      imageUrl: "",
      videoUrl: "",
      description: "",
      price: "",
      search: "",
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.genre !== "" &&
        this.platform !== "" &&
        this.imageUrl !== "" &&
        this.videoUrl !== "" &&
        this.description !== "" &&
        this.price !== ""
      );
    },
    filteredGames: function () {
      return this.games.filter((game) => {
        return game.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
    games() {
      return this.$store.getters.games;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    onAddProduct() {
      if (!this.formIsValid) {
        return;
      }
      const gameData = {
        title: this.title,
        genre: this.genre,
        platform: this.platform,
        imageUrl: this.imageUrl,
        videoUrl: this.videoUrl,
        description: this.description,
        price: this.price,
      };
      this.$store.dispatch("add_product", gameData);
      this.$router.push("/games");
    },
    remove_products(game) {
      this.$store.dispatch("removeProduct", game);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  background-color: map-get($Colorscheme, searchbar);
}
#createNew {
  background-color: map-get($Colorscheme, cards);
}
#editIcon {
    color: map-get($Colorscheme, yes);

}
#delIcon {
  color: map-get($Colorscheme, no);
}
#products {
   background-color: map-get($Colorscheme, cards);

}
</style>