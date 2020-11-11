<template>
    <v-dialog width="400px" v-model="dialog" >
        <template v-slot:activator="{ on, attrs }">
            <v-btn text fab accent v-bind="attrs" v-on="on" >
                <v-badge
                    color="green"
                    overlap
                    left
                    bottom
                >
                    <template v-slot:badge>
                        <span> {{badge}} </span>
                    </template>
                    <v-icon class="mr-5 mt-2" color="teal accent-4" x-large>shopping_basket</v-icon>
                </v-badge>
            </v-btn>
        </template>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12 row>
                        <v-card-title class="ml-3">Basket</v-card-title>
                        <v-spacer></v-spacer>
                        <v-icon class="mr-2" color="teal accent-4" large>shopping_basket</v-icon>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-simple-table id="menu-table" v-if="basket.length > 0">
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left teal--text text--accent-4" style="width:50%">Title</th>
                            <th class="text-left teal--text text--accent-4" style="width:30%">Qnt</th>
                            <th class="text-left teal--text text--accent-4" style="width:20%">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="game in basket" :key="game.title">
                                <td>{{ game.title }}</td>
                                <td>
                                    <v-icon color="teal accent-4" @click="decreaseQtn(game)">indeterminate_check_box</v-icon>
                                    {{game.quantity}}
                                    <v-icon color="teal accent-4" @click="increaseQtn(game)">add_box</v-icon>
                                    
                                </td>
                                <td> {{ game.price }}</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                    <v-simple-table v-else>
                        <p>Basket is empty</p>
                    </v-simple-table>
                    <v-divider></v-divider>
                    <v-row id="basket_checkout" class="mt-4" style="margin:0;">
                        <v-col>
                            <p>Total amount:</p>
                        </v-col>
                        <v-col class="text-right text-decoration-underline">
                            <p><b>{{total}} DKK</b></p>
                        </v-col>
                    </v-row>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn color="red" text @click="dialog = false">Close</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn class="teal--text text--accent-4" text @click="dialog = false">Checkout</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        data(){
            return{
                dialog: false,
                basketDump: [],
            }      
        },
        computed:{
            basket(){
                return this.$store.getters.getBasketItems
            },
            total(){
                var total = 0;
                for(var games in this.basket){
                    var individualGame = this.basket[games];
                    total += individualGame.quantity * individualGame.price;
                }
                return total
            },
            badge(){
                var messages = 0;
                for(var games in this.basket){
                    var individualGame = this.basket[games];
                    messages += individualGame.messages;
                }
                return messages
            },
        },

        methods:{
            increaseQtn(game){
                game.quantity++
                game.messages++
            },
            decreaseQtn(game){
                game.quantity--;
                game.messages--

                if(game.quantity == 0){
                    this.basket.splice(this.basket.indexOf(game), 1)
                }
            },

        }
            
    }
</script>

<style lang="scss" scoped>

</style>