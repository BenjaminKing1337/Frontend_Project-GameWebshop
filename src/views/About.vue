<template>
  <div class="about">
    <v-layout>
      <v-flex>
        <v-card class="mx-auto my-10 pa-9" width="90%">
          <h1>Our Vision.</h1>
          <hr />
          <br>
          <p>This is an online videogame webshop, that handles a wide variety of popular titles, information, trailers and display of artwork for said titles.
            Made by a couple of multimedia students from Business Academy Southwest. </p>
            <p>It is supposed to be a simple and easy-to-navigate site that reflects our skills in making progressive web apps such as this webshop  </p>
          <v-row>
            <v-col id="symbols">
              <v-img src="@/assets/logo.png"> </v-img>
              <v-img src="@/assets/logo.png"> </v-img>
              <v-img src="@/assets/logo.png"> </v-img>
              <v-img src="@/assets/logo.png"> </v-img>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          id="sam"
          class="mx-auto my-10 pa-9"
          width="90%"
          color="transparent"
        >
          <v-row id="creators">
            <v-col>
              <v-img src="@/assets/samo.png"> </v-img>
            </v-col>
            <v-col id="usText">
              <h1>This is a Sam.</h1>
              <hr />
              <p>This is about Sam 
               <br> He is the man
               <br> who delivers</p>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          id="ben"
          class="mx-auto my-10 pa-9"
          width="90%"
          color="transparent"
        >
          <v-row class="creators">
            <v-col id="usText">
              <h1>This is a Benji.</h1>
              <hr />
              <p>This is about Benji</p>
            </v-col>
            <v-col>
              <v-img src="@/assets/ben.png"> </v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "./src/styles/variables.scss";

#symbols {
  display: flex;
  flex-flow: row wrap;
}

#ben,
#sam {
  box-shadow: none;
  #usText {
    background-color: map-get($Colorscheme, denary);
    border-radius: 5px;
    margin: auto 0;
    padding: 30px;
  }
}

@media only screen and (max-width: 850px) {
  #creators {
    display: flex;
    flex-direction: row;
  }
  .creators {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>