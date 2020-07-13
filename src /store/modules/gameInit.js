// initial state
// roomId: number
// isGod: key
// wolfNum: number
// villagerNum: number
// godsList: [ id ]
// playerNum: number
// currentPlayerNum: number
// killSideOrAll: bool
//    false: Side, true: All
const state = () => ({
  roomId: "",
  isGod: false,
  wolfNum: 0,
  villagerNum: 0,
  godsList: [],
  playerNum: 0,
  currentPlayerNum: 0,
  killSideOrAll: true
})

// getters
// ableToStart: only when players number larger than 6 can we launch the game
const getters = () => ({
  ableToStart: state => {
    return (state.wolfNum + state.villagerNum + state.godsList.length > 6)
  }
})

// mutations
// createRoom: initialize the game
const mutations = () => ({
  createRoom: (state, wolfNum, villagerNum, godsList, killSideOrAll) => {
    // state.roomId = JIANGJUN_giveMeOneRoomId()
    state.isGod = true,
    state.wolfNum = wolfNum,
    state.villagerNum = villagerNum,
    state.godsList = godsList,
    state.playerNum = state.wolfNum + state.villagerNum + state.godsList.length,
    state.killSideOrAll = killSideOrAll
  },

  joinRoom: (state, userName, roomId) => {
    // howToMatchThisRoom
    if (state.currentPlayerNum < state.playerNum) {
      state.roomId = roomId;
      rootState.gameStatus.playerInf.push(currentPlayer+1, userName, 0, true);
      state.currentPlayerNum ++; 
      return true;
    } 
    else {
      return false;
    } 
  },

  assignIdentity: (state, rootGetters) => {
    if (!Array.prototype.shuffle) { 
      Array.prototype.shuffle = function() {
        for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
      };
    }

    var identities = []
    for(var i = 0; i < state.wolfNum; ++i){
      identities.push("Wolf");
    }
    for(i; i < state.wolfNum + state.villagerNum; ++i){
      identities.push("Villager");
    }
    for(i = 0; i < state.godsList.length; ++i){
      identities.push(godsList[i]);
    }

    identities.shuffle();
    for(i = 0; i < state.playerNum; ++i){
      rootGetters.getPlayerByKey(i).identity = identities[i]
    }
  },
})

// actions
// const actions = () => ({
//   increment: ({commit}) => {
//     commit('increment')
//   },
//   decrement: ({commit}) => {
//     commit('decrement')
//   }
// })


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

// const state = () => ({
//   roomNum: 0000,
//   god: "",
//   dayCount: 0,
//   peopleNum: 0, //Not include God
//   State: ["", "", ""],
//   activeState: [0, 0],
//   start: 0,
// });

// const getter = {
//   isStart: (state) => state.start,
//   dayCount: (state) => state.dayCount,
//   activeState: (state) => state.activeState,
// };

// const mutation = {
//   nextDay: (state) => {
//     curState = state.activeState;
//     dayNum = state.peopleNum;
//     nightNum = state.State.length;
//     if (curState[0] === 0) {
//       if (curState[1] + 1 < nightNum) {
//         curState[1]++;
//       } else {
//         curState[0] = 1;
//         curState[1] = 0;
//       }
//     } else {
//       if (curState[1] + 1 < dayNum) {
//         curState[1]++;
//       } else {
//         curState[0] = 0;
//         curState[1] = 0;
//       }
//     }
//   },
// };
