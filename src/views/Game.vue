<template>
    <div>
        <loader v-if="loading"></loader>
        <v-layout v-else>
            <v-card
                class="mx-auto my-10 pa-1"  
                max-width="90%" 
            >
                <v-icon @click="goBack" id="close" color="teal accent-4" x-large>clear</v-icon>
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
                <v-card-text class="font-weight-black text-h4 text-center pt-10 teal--text text--accent-4">
                    {{game.price}} kr.
                    <v-btn
                        color="teal accent-4"
                        class="white--text center-text"
                        @click="addToBasket(game)"
                        id="btn"
                    >
                        Add
                        <v-icon color="white" class="mx-auto my-auto">shopping_basket</v-icon>
                    </v-btn>
                </v-card-text>
                
            </v-card>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                basketDump: [],
            }
        },
        props: ['id'],
        computed:{
            game(){
                return this.$store.getters.loadedGame(this.id)
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
                });
            this.$store.commit('addBasketItems', this.basketDump);
            this.basketDump = [];
            },
            goBack(){
                return this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #close{
        position: absolute;
        z-index: 2;
        background-color: #424242;
        border-radius: 50px;
        margin: -15px 0 0 -15px;
    }
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
    #btn{
        height: 50px !important;
        width: 88px !important;
    }
</style>