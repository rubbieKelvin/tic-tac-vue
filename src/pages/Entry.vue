<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-gray-200 w-[400px] p-5 rounded-md flex flex-col gap-6">
            <h1 class="text-3xl">TicTacToe</h1>
        
            <div class="flex flex-col gap-2">
                <h2 class="text-lg">Player One</h2>
                <input v-model="playerOne" class="rounded-md outline-blue-500 p-3 w-full text-lg" type="text" placeholder="player one's name...">
            </div>
        
            <div class="flex flex-col gap-2">
                <h2 class="text-lg">Player Two</h2>
                <input v-model="playerTwo" class="rounded-md outline-blue-500 p-3 w-full text-lg" type="text" placeholder="player two's name...">
            </div>

            <button @click="nextScreen" class="p-3 bg-blue-500 text-white rounded-md text-lg">Start</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        playerOne: {
            get(){
                return this.$store.state.game.players.playerOne
            },
            set(value){
                this.$store.commit('SET_PLAYER_ONE', value)
            }
        },
        playerTwo: {
            get(){
                return this.$store.state.game.players.playerTwo
            },
            set(value){
                this.$store.commit('SET_PLAYER_TWO', value)
            }
        }
    },
    methods: {
        nextScreen(){
            if (this.playerOne.length!==0 && this.playerTwo.length!==0){
                this.$router.push('/game')
            }
        }
    }
}
</script>
