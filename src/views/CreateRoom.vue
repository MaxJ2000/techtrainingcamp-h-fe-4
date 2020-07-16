<template>
  <div class="d-flex flex-column align-center">
    <Title msg="创建房间"></Title>
    <!-- <InfChip msg="0"></InfChip> -->
    
    <button @click="increment">+</button>

    {{ $store.state.gameStatus.roomNum}}
    
    <button @click="decrement">-</button>
    <Button msg="创建"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
// import InfChip from "@/components/InfChip.vue";
import Button from "@/components/Button.vue";
import {mapState, mapActions} from 'vuex'
// import gameStatus from '../store/modules/gameStatus'

export default {
  name: "Home",
  components: {
    Title,
    // InfChip,
    Button,
  },
  computed: {
    ...mapState({
      roomNum: state => state.gameStatus.roomNum
    })
  },
  methods: {
        ...mapActions('gameStatus', ['increment', 'decrement']),
    }
};
</script>
