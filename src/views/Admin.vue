<template>
    <div>
        <v-container style="background-color:white">
            <v-layout row>
                <v-flex xs8 sm6 offset-sm3 offset-xs4>
                    <h4>Create a new Product</h4>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <form @submit.prevent="onAddProduct">
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <v-text-field
                                    name="title"
                                    label="Title"
                                    id="title"
                                    v-model="title"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <v-text-field
                                    name="genre"
                                    label="Genre"
                                    id="genre"
                                    v-model="genre"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <v-text-field
                                    name="platform"
                                    label="Platform"
                                    id="platform"
                                    v-model="platform"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <v-text-field
                                    name="imageUrl"
                                    label="Image URL"
                                    id="image-url"
                                    v-model="imageUrl"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <img :src="imageUrl" height="150">
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <v-text-field
                                    name="videoUrl"
                                    label="Video URL"
                                    id="video-url"
                                    v-model="videoUrl"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <v-textarea
                                    name="description"
                                    label="Description"
                                    id="description"
                                    v-model="description"
                                    multi-line
                                    required
                                ></v-textarea>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs2>
                                <v-text-field
                                    name="price"
                                    label="Price"
                                    id="price"
                                    v-model="price"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs8 sm6 offset-sm3 offset-xs4>
                                <v-btn 
                                    color="green" 
                                    :disabled="!formIsValid"
                                    type="submit"
                                >
                                    Add Product
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
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
        <v-layout v-else>
            <v-flex xs10 sm6 offset-sm3 offset-xs1>
                <v-simple-table class="my-6">
                    <tbody>
                        <tr v-for="game in games" :key="game.index">
                            <td>
                                <span class="font-weight-bold">{{ game.title }}</span> <br>
                                <span class="font-weight-light">{{ game.genre }}</span> <br>
                                <span class="font-weight-light">{{ game.platform}}</span> <br>
                                <span>{{ game.price }} DKK</span>
                            </td>
                            <td>
                                <product-edit :game="game"></product-edit>
                            </td>
                            <td>
                                <v-btn text fab>
                                    <v-icon color="red">delete</v-icon>
                                </v-btn>
                            </td>
                            
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title:'',
                genre:'',
                platform:'',
                imageUrl:'',
                videoUrl:'',
                description:'',
                price:'',
                search: '',
            }
        },
        computed:{
            formIsValid(){
                return this.title !== '' && 
                    this.genre !== '' &&
                    this.platform !== '' &&
                    this.imageUrl !== '' &&
                    this.videoUrl !== '' &&
                    this.description !== '' &&
                    this.price !== ''
            },
            games(){
                return this.$store.getters.games
            },
            loading () {
                return this.$store.getters.loading
            },
        },
        methods:{
            onAddProduct(){
                if (!this.formIsValid){
                    return
                }
                const gameData = {
                    title:this.title,
                    genre:this.genre,
                    platform:this.platform,
                    imageUrl:this.imageUrl,
                    videoUrl:this.videoUrl,
                    description:this.description,
                    price:this.price
                }
                this.$store.dispatch('add_product', gameData)
                this.$router.push('/games');
            },
            remove_products(game){
                this.$store.dispatch('remove_product', game)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>