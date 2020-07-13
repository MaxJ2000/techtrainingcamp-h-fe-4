// initial state
// roomId: number
// isGod: key
// wolfNum: number
// villagerNum: number
// godsDict: [{ id, enable:bool }]
// playerNum: number
// currentPlayerNum: number
// killSideOrAll: bool
//    false: Side, true: All
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
  roomId: "",
  isGod: false,
  wolfNum: 0,
  villagerNum: 0,
  godsDict: [],
  playerNum: 0,
  currentPlayerNum: 0,
  killSideOrAll: true,
  // restNum: [0, 0, 0],
  // dayCount: 0,
  // activeState: [0, 0],
  // waitingState: []
})

// getters
// ableToStart: only when players number larger than 6 can we launch the game
const getters = () => ({
  ableToStart: state => (state.wolfNum + state.villagerNum + state.godsDict.length > 6)
})

// mutations
// createRoom: initialize the game
const mutations = () => ({
  createRoom: (state, wolfNum, villagerNum, godsDict, killSideOrAll) => {
    // state.roomId = JIANGJUN_giveMeOneRoomId()
    state.isGod = true,
    state.wolfNum = wolfNum,
    state.villagerNum = villagerNum,
    state.godsDict = godsDict,
    state.playerNum = state.wolfNum + state.villagerNum + state.godsDict.length,
    state.killSideOrAll = killSideOrAll
  },
  joinRoom: (state, userName, roomId) => {
    // howToMatchThisRoom
    if (state.currentPlayerNum < state.playerNum) {
      state.roomId = roomId;
      rootState.playerInf.push(currentPlayer+1, userName, 0, [0, 0, 0]);
      state.currentPlayerNum ++; 
      return true;
    } 
    else {
      return false;
    } 
  }
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
