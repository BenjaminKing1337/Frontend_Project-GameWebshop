<template>
  <div>
  
    <div class="search">
      <input class="searchbar" type="text" v-model="search" placeholder="Search Games">
    </div>
    
    <div class="games">
      <loader v-if="loading"></loader>
      <v-layout id="all_games" v-else class="mb-5">
        <v-card
          max-width="288"
          v-for="game in filteredGames" :key="game.id"
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
                  color="teal accent-4"
                  text
                  @click="addToBasket(game)"
                >
                  Add
                  <v-icon color="teal accent-4" class="icon">shopping_basket</v-icon>
                </v-btn>

                <v-btn
                  color="teal accent-4"
                  text
                  :to="'/games/' + game.id"
                >
                  See More
                  <v-icon color="teal accent-4" class="icon">search</v-icon>
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
  data(){
    return{
      search: '',
      basketDump: [],
    }
  },
  name: 'Games',
  components: {},
  
  computed: {
    filteredGames:function(){
      return this.games.filter((game) =>{
        return game.title.toLowerCase().match(this.search.toLowerCase())
      })
    },
    games(){
      return this.$store.getters.games
    },
    loading () {
      return this.$store.getters.loading
    },
  },
  methods:{
    addToBasket(game){
      this.basketDump.push({
          title: game.title,
          price: game.price,
          quantity: 1,
          messages: 1,
        });
      this.$store.commit('addBasketItems', this.basketDump);
      this.basketDump = [];
    },
  }
}
</script>

<style lang="scss" scoped>
  .search{
    text-align: center;
  }
  .searchbar{
    background-color: azure;
    height: 3em;
    width: 80%;
    margin: 5% auto 2% auto;
    border-radius: 10px;
    padding-left: 10px;
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