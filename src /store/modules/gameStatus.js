// initial state
// personalInf: [{ key, name, identity, isAlive}]
// isMyTurn: bool
// restNum: [number, number, number]
//    first array: wolves left,
//    first array: villagers left,
//    first array: gods left,
// dayCount: number
// activeState: [0, 0],
//    first array: 0 - night 1 - day
//    second array: if night , 0 - wolf , 1 - prophet , 2 - witch , 3 - guard
//                 if day, 0 - last night situation , 1 - first person speak , 2 - second person speak ......
// waitingState: [0, 0]
//    record current night death situation
const state = () => ({
  playerInf: [],
  isMyTurn: false,
  restNum: [0, 0, 0],
  dayCount: 0,
  activeState: [0, 0],
  waitingState: []
})

// getters
const getters = () => ({
  
  getPlayerByKey: (state) => (key) => {
    return state.playerInf.find(player => player.key === key)
  },

  getPlayerByIdentity: (state) => (identity) => {
    return state.playerInf.find(player => player.identity === identity)
  },

  getAliveNumer: (state) => {
    var count = 0;
    for(var i = 0; i < state.playerInf.length; ++i){
      if(playerInf[i].isAlive)
          count++;
  }
    return count;
  }
})

const mutation = () => ({
  // nextDay: (state) => {
  //       curState = state.activeState;
  //       dayNum = state.peopleNum;
  //       nightNum = state.State.length;
  //       if (curState[0] === 0) {
  //         if (curState[1] + 1 < nightNum) {
  //           curState[1]++;
  //         } else {
  //           curState[0] = 1;
  //           curState[1] = 0;
  //         }
  //       } else {
  //         if (curState[1] + 1 < dayNum) {
  //           curState[1]++;
  //         } else {
  //           curState[0] = 0;
  //           curState[1] = 0;
  //         }
  //       }
  //     },
  // setName: (state, { key, name }) => {
  //   this.$store.getters.key2item(key).name = name;
  // },
  // setStatus: (state, { key, status }) => {
  //   this.$store.getters.key2item(key).status = status;
  // }
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
