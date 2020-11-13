<template>
  <div class="about">
    <loader v-if="loading"></loader>

    <v-layout v-else>
      <v-flex>
        <v-card class="mx-auto my-10 pa-9" max-width="70%">
          <h1 id="atCol">Our Vision.</h1>
          <hr />
          <p>- For an online webshop</p>
        </v-card>
        <v-card class="mx-auto my-10 pa-9" max-width="70%">
          <p>
            This is an online videogame webshop, that handles a wide variety of
            popular titles, information, trailers and display of artwork for
            said titles. Made by a couple of multimedia students from Business
            Academy Southwest.
          </p>
          <p>
            It is supposed to be a simple and easy-to-navigate site that
            reflects our skills in making progressive web apps such as this
            webshop.
          </p>
          <p>
            It is made with Vue Js as the framework, and uses Google Firebase
            for database storage and website deployment.
          </p>
          <p>
            While it is primarily made as a webshop for SONY Playstation 4
            titles, it can be used for a less exclusive selection or even
            completely different products without much trouble.
          </p>
          <p>We hope you enjoy the site.</p>
          <p id="atCol">Sincerely,<br />Benjamin & Samuel</p>
          <v-row>
            <v-col id="symbols">
              <v-img
                id="symb1"
                src="@/assets/easv.jpg"
                max-height="100px"
                max-width="220px"
                class="mx-auto my-10 pa-9"
              >
              </v-img>
              <v-img
                id="symb2"
                src="@/assets/logo.png"
                max-height="200px"
                max-width="180px"
                class="mx-auto my-10 pa-9"
              >
              </v-img>
              <v-img
                id="symb3"
                src="@/assets/firebase.png"
                max-height="220px"
                max-width="220px"
                class="mx-auto my-10 pa-9"
              >
              </v-img>
              <v-img
                id="symb4"
                src="@/assets/ps.png"
                max-height="200px"
                max-width="220px"
                class="mx-auto my-10 pa-2"
              >
              </v-img>
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
              <h1 id="atCol">This is Sam.</h1>
              <hr />
              <p>
                Molded by harsh forests of the Slovakian wilds, Sam journeyed to
                Scandinavia and found a place within Esbjerg, Denmark. To live,
                laugh, and mostly, to code.
              </p>
              <p>
                When this man is not coding, you will either find him delivering
                packages to the needy or performing intense workouts, sculpting
                away at his own marble.
              </p>
              <p>Sam the Man.</p>
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
              <h1 id="atCol">This is Benji.</h1>
              <hr />
              <p>Hey Sam, can you write something funny about me? :D</p>
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
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/styles/variables.scss";

#symbols {
  display: flex;
  flex-flow: row wrap;
  #symb1,
  #symb2,
  #symb3,
  #symb4 {
    align-self: center;
  }
}

#ben,
#sam {
  box-shadow: none;
  #usText {
    background-color: map-get($Colorscheme, cards);
    border-radius: 5px;
    margin: auto 0;
    padding: 30px;
  }
}

#atCol {
  color: map-get($Colorscheme, textaccent) !important;
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