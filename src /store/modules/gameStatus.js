// initial state
// personalInf: [{ key, name, identity, isAlive, killedBy}]
//    killedBy: wolf, vote, hunter, witch
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
  // isMyTurn: false,
  restNum: {restWolves: 0, restVillagers: 0, restDeities: 0},
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
    newArray = [];
    j = 0;
    for(let x in state.playerInf){
      if(x.identity == identity){
       newArray[j++] = x;
      }
    }
    return newArray;
  },

  getAliveNumer: (state) => {
    var count = 0;
    for(var i = 0; i < state.playerInf.length; ++i){
      if(playerInf[i].isAlive)
          count++;
  }
    return count;
  },

  getNightNum: (rootState) => { // wolf, prophet, witch, guard
    var nightNum = 1;
    for (x in rootState.gameInit.deitiesList) {
      if ( x == "prophet" ) {
        nightNum++;
      } 
      else if ( x == "witch") {
        nightNum++;
      }
      else if ( x == "guard") {
        nightNum++;
      }
    }
    return nightNum;
  },

  canHeDie: (state) => {
    /*********
     * TODO: add more situations (guard, milk through)
     * *********/
    if (state.waitingState.killedByKnife == state.waitingState.savedByMedicine) {
      return false;
    }
    return true;
  },

  endGame: (state, rootState) => () => {
    if (state.restNum.restWolves == 0) {
      return 1;
    }

    if (rootState.gameInit.killSideOrAll) {
      if (state.restNum.restVillagers == 0 || state.restNum.restDeities == 0) {
        return 2;
      }
    }
    else {
      if (((state.restNum.restWolves == 1) && !state.restNum.restVillagers && (state.restNum.restDeities == 1)) || 
          ((state.restNum.restWolves == 1) && (state.restNum.restVillagers == 1) && !state.restNum.restDeities)) {
            return 2;
          }
    }

    return 0;
  }
})

// mutations
// createRoom: initialize the game
const mutation = () => ({
  initializeGame: (state, {rootState}) => {
    state.restNum = {restWolves: rootState.gameInit.wolfNum, restVillagers: rootState.gameInit.villagerNum, restDeities: rootState.gameInit.deitiesList.length}
    state.activeState = [0, 0];
    state.dayCount = 0;
    state.waitingState = {killedByKnife: -1, killedByPoison:-1, savedByMedicine:-1}
  },

  markWolf: (state, {getters,key}) => {
    if (getters.getPlayerByKey(key).isAlive) {
      state.waitingState.killedByKnife = key;
      return true;
    } else {
      return false;
    }
  }, 

  markPoison: (state, {getters,key}) => {
    if (getters.getPlayerByKey(key).isAlive) {
      state.waitingState.killedByPoison = key;
      return true;
    } else {
      return false;
    }
  },
 
  // voted people died
  // must vote one every day
  voteOut: (state, {getters,key}) => {
    diedPlayer = getters.getPlayerByKey(key);
    diedPlayer.isAlive = false;
    diedPlayer.killedBy = "voted";
    if (diedPlayer.identity == "villager") {
      state.restNum.restVillagers--;
    } else if (diedPlayer.identity == "wolf") {
      state.restNum.restWolves--;
    }
    else {
      state.restNum.restDeities--;
    }
  },

  nextStep: (state, getters) => {
    var curState = state.activeState;
    var dayNum = 2;
    var firstdayNum = 3;
    var nightNum = getters.getNightNum; 

    if (state.dayCount === 0){
      if (curState[0] === 0) {  // night
        if (curState[1] + 1 < nightNum) {
          curState[1]++;
        } else {

          // only two people can make one die: wolf and witch (even if milk through)
          // witch has absolute fatal poison
          // while wolf can be defended by medicine and guard
          if (getters.canHeDie) { // about wolf
            diedPlayer = getters.getPlayerByKey(state.waitingState.killedByKnife);
            diedPlayer.isAlive = false;
            diedPlayer.killedBy = "wolf";
            if (diedPlayer.identity == "villager") {
              state.restNum.restVillagers--;
            } else if (diedPlayer.identity == "wolf") {
              state.restNum.restWolves--;
            }
            else {
              state.restNum.restDeities--;
            }
          }
          if (state.waitingState.killedByPoison != -1) {  // about poison
            diedPlayer = getters.getPlayerByKey(state.waitingState.killedByPoison);
            diedPlayer.isAlive = false;
            diedPlayer.killedBy = "witch";
            if (diedPlayer.identity == "villager") {
              state.restNum.restVillagers--;
            } else if (diedPlayer.identity == "wolf") {
              state.restNum.restWolves--;
            }
            else {
              state.restNum.restDeities--;
            }
          }
          state.waitingState = {killedByKnife: -1, killedByPoison:-1, savedByMedicine:-1}
          curState[0] = 1;
          curState[1] = 0;
        }
      } else {  // day
        if (curState[1] + 1 < firstdayNum) {
          curState[1]++;
        } else {

          
          curState[0] = 0;
          curState[1] = 0;
        }
      }

    } else {
      if (curState[0] === 0) {  // night
        if (curState[1] + 1 < nightNum) {
          curState[1]++;
        } else {
          curState[0] = 1;
          curState[1] = 0;
        }
      } else {  // day
        if (curState[1] + 1 < dayNum) {
          curState[1]++;
        } else {
          curState[0] = 0;
          curState[1] = 0;
        }
      }
  
    }

    state.dayCount++;
  }

  
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
