// initial state
// roomId: number
// isGod: key
// wolfNum: number
// villagerNum: number
// deitiesList: [ id ]
// playerNum: number
// currentPlayerNum: number
// killSideOrAll: bool
//    false: Side, true: All
const state = () => ({
  roomId: "",
  isGod: false,
  wolfNum: 0,
  villagerNum: 0,
  deitiesList: [],
  playerNum: 0,
  currentPlayerNum: 0,
  killSideOrAll: true,
  isStart: false
})

// getters
// ableToCreate: only when players number larger than 6 can we launch the game
const getters = () => ({
  ableToCreate: state => {
    return (state.wolfNum + state.villagerNum + state.deitiesList.length > 6)
  },
  ableToStart: state => {
    // more to judge
    return (state.currentPlayerNum == state.playerNum)
  }
})

// mutations
// createRoom: initialize the game
const mutations = () => ({
  createRoom: (state, wolfNum, villagerNum, deitiesList, killSideOrAll) => {
    // state.roomId = JIANGJUN_giveMeOneRoomId()
    state.isGod = true,
    state.wolfNum = wolfNum,
    state.villagerNum = villagerNum,
    state.deitiesList = deitiesList,
    state.playerNum = state.wolfNum + state.villagerNum + state.deitiesList.length,
    state.killSideOrAll = killSideOrAll
  },

  joinRoom: (state, userName, roomId) => {
    // howToMatchThisRoom
    if (state.currentPlayerNum < state.playerNum) {
      state.roomId = roomId;
      rootState.gameStatus.playerInf.push({key:state.currentPlayerNum-1, name:userName, identity:"", isAlive:true, killedBy:""});
      state.currentPlayerNum ++; 
      return true;
    } 
    else {
      return false;
    } 
  },

  startAndAssignIdentity: (state, rootGetters) => {
    state.isStart = true;
    // identities = getListFromJIANGJUN
     for(var i = 0; i < state.playerNum; ++i){
       rootGetters.getPlayerByKey(i).identity = identities[i]
     }    
  },
})

// actions
// const actions = () => ({
//   startGame: ({commit, getters}) => {
    
//     commit('')
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
