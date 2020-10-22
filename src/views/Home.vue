<template>
<div>
  <div class="slideshow">
    <v-carousel
        height="100%"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
        <v-img :src="item.src" height="100%"></v-img>
        </v-carousel-item>
      </v-carousel>
  </div>
  <div class="games">
    <h1>Top Selling Games</h1>
    <div class="cards">
      <v-card
        v-for="(game,index) in games" :key="index"
        max-width="220"
        class="ma-2"
        id="card"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title class="text-caption font-weight-bold">{{game.name}}</v-card-title>
        </v-img>
      </v-card>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
      return {
        items: [
          {
            src: 'https://www.pdvg.it/wp-content/uploads/2020/07/Ghost-of-Tsushima-1.jpg',
          },
          {
            src: 'https://www.ps4home.com/wp-content/uploads/2015/03/bloodborne-PS4-.jpg',
          },
          {
            src: 'https://d1pqlgpcx1bu0k.cloudfront.net/static/img/GOW-OG-image.jpg',
          },
          {
            src: 'https://www.indiewire.com/wp-content/uploads/2019/10/Death-Stranding-logo.jpg',
          },
        ],
        games: [
                    {name:'Ghost of Tsushima'},
                    {name:'Bloodborne'},
                    {name:'God of War'},
                    {name:'Death Stranding'},
                    {name:'The Last Of Us'},
                    {name:'Uncharted'},
                ]
      }
    },
}
</script>

<style lang="scss" scoped>
  .slideshow{
    width: 80%;
    margin: 20px auto 0 auto;
  }
  .games{
    height: auto;
    background-color: grey;
    text-align: center;
  }
  .cards{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    margin: auto;
  }
  #card{
    transition: 0.5s;
    cursor: pointer;
    &:hover{
      filter: grayscale(0.8);
    }
  }
  #card:nth-child(3){
    break-after: always;
  }

  @media only screen and (max-width: 900px){
    .slideshow{
      width: 90%;
    }
  }


</style>
