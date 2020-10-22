<template>
    <v-container>
        <v-row>
            <v-col offset-md="3" md="6" xs="12">
                <h1>Administrator login</h1>

                <div id="info">
                    <v-text-field v-model="email" label="Email" required></v-text-field>
                    <v-text-field v-model="password" label="Password" required></v-text-field>
                    <v-btn color="green" @click.prevent="signIn()">
                        Login
                    </v-btn>
                    <v-btn color="red" @click.prevent="signOut()">
                        signOut
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>