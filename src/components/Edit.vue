<template>
  <v-dialog width="350px" v-model="dialog" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text fab accent v-bind="attrs" v-on="on">
        <v-icon color="teal accent-4">edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="editedTitle"
                required
              ></v-text-field>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                v-model="editedDescription"
                required
              ></v-textarea>
              <v-text-field
                name="genre"
                label="Genre"
                id="genre"
                v-model="editedGenre"
                required
              ></v-text-field>
              <v-text-field
                name="platform"
                label="Platform"
                id="platform"
                v-model="editedPlatform"
                required
              ></v-text-field>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="imageUrl"
                v-model="editedImageUrl"
                required
              ></v-text-field>
              <v-text-field
                name="videoUrl"
                label="Video URL"
                id="videoUrl"
                v-model="editedVideoUrl"
                required
              ></v-text-field>
              <v-text-field
                name="price"
                label="Price"
                id="price"
                v-model="editedPrice"
                required
              ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn color="red" text @click="dialog = false">Close</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="teal--text text--accent-4"
                text
                @click="onSaveChanges"
                >Save</v-btn
              >
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["game"],
  data() {
    return {
      dialog: false,
      editedTitle: this.game.title,
      editedDescription: this.game.description,
      editedGenre: this.game.genre,
      editedPlatform: this.game.platform,
      editedImageUrl: this.game.imageUrl,
      editedVideoUrl: this.game.videoUrl,
      editedPrice: this.game.price,
    };
  },
  methods: {
    onSaveChanges() {
      if (
        this.editedTitle.trim() === "" ||
        this.editedDescription.trim() === "" ||
        this.editedGenre.trim() === "" ||
        this.editedPlatform.trim() === "" ||
        this.editedImageUrl.trim() === "" ||
        this.editedVideoUrl.trim() === "" ||
        this.editedPrice.trim() === ""
      ) {
        return;
      }
      this.dialog = false;
      this.$store.dispatch("updateData", {
        id: this.game.id,
        title: this.editedTitle,
        description: this.editedDescription,
        genre: this.editedGenre,
        platform: this.editedPlatform,
        imageUrl: this.editedImageUrl,
        videoUrl: this.editedVideoUrl,
        price: this.editedPrice,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>