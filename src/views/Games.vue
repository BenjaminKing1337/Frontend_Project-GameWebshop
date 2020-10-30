<template>
  <div>
    <div class="searchbar"></div>
    <div class="games">
      <v-card
        max-width="288"
        v-for="game in games" :key="game.id"
        class="mr-5 ml-5"
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
    }
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
    width: 80%;
    display: flex;
    margin: 0 auto;
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
 
  @media only screen and (max-width: 900px){

  }


</style>