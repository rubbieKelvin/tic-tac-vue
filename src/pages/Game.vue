<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="min-w-[320px] flex flex-col gap-10">
            <!-- score board -->
            <div class="flex">
                <!-- player one -->
                <div :class="[($store.state.game.whosPlaying==0) ? 'bg-blue-500 text-white': 'bg-gray-200 text-black']" class="flex gap-3 p-2 rounded-md hover:p-3">
                    <p>{{$store.state.game.players.playerOne}}</p>
                    <p>{{$store.state.game.score.playerOne}}</p>
                </div>
                <div class="flex-grow"/>
                <!-- player two -->
                <div :class="[($store.state.game.whosPlaying==1) ? 'bg-red-500 text-white': 'bg-gray-200 text-black']" class="flex gap-3 bg-gray-200 p-2 rounded-md hover:p-3">
                    <p>{{$store.state.game.players.playerTwo}}</p>
                    <p>{{$store.state.game.score.playerTwo}}</p>
                </div>
            </div>

            <!-- game board -->
            <div
            :class="{'pointer-events-none': $store.state.game.finished}"
            class="flex flex-wrap w-[320px] gap-[10px]">
                <div
                :class="[
                notNone($store.state.game.board[i]) ? ($store.state.game.board[i]=='X' ? 'bg-blue-500 text-white':'text-white bg-red-500') : 'bg-gray-200 text-black'],
                notNone($store.state.game.board[i]) ? 'pointer-events-none': ''
                "
                @click="
                    $store.commit('NEXT_PLAYER'),
                    $store.commit('WRITE_BOARD', i)"
                class="flex items-center justify-center w-[100px] h-[100px] rounded-md" v-for="i in 9" :key="i">
                    <p class="text-3xl font-bold" v-if="notNone($store.state.game.board[i])">
                        {{$store.state.game.board[i]}}
                    </p>
                </div>
            </div>

            <!-- pop -->
            <div v-if="$store.state.game.finished && $store.state.game.sessionWinner" class="bg-gray-200 p-3">
                <p v-if="$store.state.game.sessionWinner==='X'">{{$store.state.game.players.playerOne}} won!</p>
                <p v-if="$store.state.game.sessionWinner==='O'">{{$store.state.game.players.playerTwo}} won!</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    created(){
        this.$store.commit('CLEAR_BOARD')
    },
    methods: {
        notNone: (obj) => (obj !== null) && (obj !== undefined)
    }
}
</script>
