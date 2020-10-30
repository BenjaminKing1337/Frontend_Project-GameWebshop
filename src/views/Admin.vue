<template>
    <div>
        <v-container style="background-color:white">
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <h4>Create a new Product</h4>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <form @submit.prevent="onAddProduct">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
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
                            <v-flex xs12 sm6 offset-sm3>
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
                            <v-flex xs12 sm6 offset-sm3>
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
                            <v-flex xs12 sm6 offset-sm3>
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
                            <v-flex xs12 sm6 offset-sm3>
                                <img :src="imageUrl" height="150">
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
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
                            <v-flex xs12 sm6 offset-sm3>
                                <v-text-field
                                    name="description"
                                    label="Description"
                                    id="description"
                                    v-model="description"
                                    multi-line
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
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
                            <v-flex xs12 sm6 offset-sm3>
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
            }
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>