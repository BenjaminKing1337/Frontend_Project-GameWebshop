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
        <v-img :src="item.src"></v-img>
        </v-carousel-item>
      </v-carousel>
  </div>
  <div class="games">
    <h1>Top Selling Games</h1>
    
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
      }
    },
}
</script>

<style lang="scss" scoped>
  .slideshow{
    width: 70%;
    margin: 20px auto 0 auto;
  }
  .games{
    height: 400px;
    background-color: grey;
    text-align: center;
  }

  @media only screen and (max-width: 900px){
    .slideshow{
      width: 90%;
    }
  }


</style>