<template>
  <div>
    <div class="searchbar"></div>
    <div class="games">
      <v-layout row wrap v-if="loading">
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                indeterminate
                class="primary--text"
                :width="7"
                :size="70"
                ></v-progress-circular>
            </v-flex>
      </v-layout>
      <v-layout id="all_games" v-else class="mb-5">
        <v-card
          max-width="288"
          v-for="game in games" :key="game.id"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="game.imageUrl"
          >
            <v-card-title style="background-color: #00000099;">{{game.title}}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            <div> {{game.genre}} </div>
            <div class="font-weight-medium"> {{game.platform}} </div>
          </v-card-subtitle>
          <div class="wrap">
            <v-card-text class="font-weight-bold pt-4 text-h6" id="price">
              <div> {{game.price}} kr.</div>
            </v-card-text>
            <div class="wrap-actions">
              <v-card-actions class="actions">
                <v-btn
                  color="orange"
                  text
                  
                >
                  Add
                  <v-icon color="orange" class="icon">shopping_basket</v-icon>
                </v-btn>

                <v-btn
                  color="orange"
                  text
                  :to="'/games/' + game.id"
                >
                  See More
                  <v-icon color="orange" class="icon">search</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Games',
  components: {},
  
  computed: {
    games(){
      return this.$store.getters.games
    },
    loading () {
      return this.$store.getters.loading
    },
  }
}
</script>

<style lang="scss" scoped>
  .searchbar{
    background-color: azure;
    height: 3em;
    width: 80%;
    margin: 5% auto 2% auto;
  }
  .games{
    .wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price{
        h6{
          margin: auto 0;
        }
      }
      .wrap-actions{
        display: flex;
        justify-content: center;
        .actions{
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 0 8px;
          .icon{
            margin-left: 5px;
          }
        }
      }
    }
    
  }
  #all_games{
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    justify-items: center;
    
  }
  @media only screen and (max-width: 1515px){
   
    #all_games{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 1200px){
   
    #all_games{
      grid-template-columns: repeat(2, 1fr);
    }
  }
 
  @media only screen and (max-width: 760px){
   
    #all_games{
      grid-template-columns: repeat(1, 1fr);
    }
  }
  


</style>