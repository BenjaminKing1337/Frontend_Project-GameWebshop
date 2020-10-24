<template>
  <div>
    <div class="searchbar"></div>
    <div class="games">
      <v-card
        max-width="288"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Ghost of Tshushima</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">
          <div>Action-Adventure</div>
          <div class="font-weight-medium">PS4</div>
        </v-card-subtitle>
        <div class="wrap">
          <v-card-text class="font-weight-bold pt-4 text-h6" id="price">
            <div>425,00 kr.</div>
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
  components: {
    
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