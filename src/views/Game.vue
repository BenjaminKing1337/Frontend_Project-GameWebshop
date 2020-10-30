<template>
    <div>
        <v-card
            class="mx-auto my-10 pa-3"  
            max-width="80%" 
        >
            <v-img
            class="white--text align-end"
            height="auto"
            :src="game.imageUrl"
            >
            <v-card-title style="background-color: #00000099;">{{game.title}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">
            <div> {{game.genre}} </div>
            <div class="font-weight-medium"> {{game.platform}} </div>
            </v-card-subtitle>
            <v-card-title>
                About
            </v-card-title>
            <v-card-text>
                <p>{{game.description}}</p>
            </v-card-text>
            <v-card-title>
                Video
            </v-card-title>
            <div class="resp-container">
                <iframe class="resp-iframe" :src="game.videoUrl" allowfullscreen gesture="media"  allow="encrypted-media" ></iframe>
            </div>
            <v-card-text class="font-weight-black text-h4 text-center pt-10">
                 {{game.price}} kr.
                 <v-btn
                color="orange"
                class="pa-6"
            >
                Add
                <v-icon color="black" class="icon">shopping_basket</v-icon>
            </v-btn>
            </v-card-text>
            
        </v-card>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        computed:{
            game(){
                return this.$store.getters.loadedGame(this.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .resp-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
        .resp-iframe {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85%;
            height: 85%;
            border: 0;
        }
    }
</style>