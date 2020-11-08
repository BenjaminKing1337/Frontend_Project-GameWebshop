<template>
    <v-dialog width="350px" v-model="dialog" persistent>
        <template v-slot:activator="{ on, attrs }">
            <v-btn text fab accent v-bind="attrs" v-on="on">
                <v-icon>edit</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>Edit</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    name="title"
                                    label="Title"
                                    id="title"
                                    v-model="editedTitle"
                                    required
                                ></v-text-field>
                                <v-textarea
                                    name="description"
                                    label="Description"
                                    id="description"
                                    v-model="editedDescription"
                                    required
                                ></v-textarea>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn text @click="dialog = false">Close</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn text @click="onSaveChanges">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props:['game'],
        data () {
            return {
                dialog: false,
                editedTitle: this.game.title,
                editedDescription: this.game.description,
            }
        },
        methods:{
            onSaveChanges(){
                if(this.editedTitle.trim() === '' || this.editedDescription.trim() === ''){
                    return
                }
                this.dialog = false
                this.$store.dispatch('updateData', {
                    id: this.game.id,
                    title: this.editedTitle,
                    description: this.editedDescription
                })
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>