
import axios from 'axios'
import {
  INIT_GAME, UPDATE_STATUS, NEXT_STEP, GAME_OVER, MARK_KNIFE, MARK_POISON, MARK_CURE, SHOOT_OUT, VOTE_OUT, CHECK_EVENTS
} from '../mutation_type'

// initial state
// personalInf: [{name, identity, isDead}]
//    isDead: 0 - alive, 1 - wolf, 2 - voted, 3 - poison, 4- hunter
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
// waitingState: {killedByKnife: 0, killedByPoison: 0, savedByCured: 0}
const state = () => ({
  playerInf: [],
  // isMyTurn: false,
  restNum: {restWolves: 0, restVillagers: 0, restDeities: 0},
  dayCount: 0,
  activeState: [0, 0],
  waitingState: {killedByKnife: -1, killedByPoison: -1, savedByCured: -1},
  isStart: false,
  hunterShoot: false
})

// getters
const getters = () => ({
  
  // getPlayerByKey: (state) => (key) => {
  //   return state.playerInf[key]
  // },

  // getPlayerByIdentity: (state) => (identity) => {
  //   newArray = [];
  //   j = 0;
  //   for(let x in state.playerInf){
  //     if(x.identity == identity){
  //      newArray[j++] = x;
  //     }
  //   }
  //   return newArray;
  // },

  // getAliveNumer: (state) => {
  //   var count = 0;
  //   for(var i = 0; i < state.playerInf.length; ++i){
  //     if(playerInf[i].isDead)
  //         count++;
  // }
  //   return count;
  // },

  getNightNum: (rootState) => { // wolf, prophet, witch, guard, hunter
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
      else if ( x == "hunter") {
        nightNum++;
      }
    }
    return nightNum;
  },

  canHunterShoot: (state) => {
    key = state.playerInf.findIndex(element => element.identity == "hunter")+1;
    if (state.waitingState.killedByKnife == key) {
      return true;
    } else {
      return false;
    }
  },

  canHeDie: (state) => {
    /*********
     * TODO: add more situations (guard, milk through)
     * *********/
    if (state.waitingState.killedByKnife == state.waitingState.savedByCured) {
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

    if (!state.isStart) {
      return 3;
    }

    return 0;
  }
})

// mutations
// createRoom: initialize the game
const mutations = () => ({
  [INIT_GAME]: (state, payload) => {
    state.playerInf = payload.playerInf;
    state.restNum = payload.restNum;
    state.dayCount = payload.dayCount;
    state.activeState = payload.activeState;
    state.waitingState = payload.waitingState;
    state.isStart = true;
  },  

  [MARK_KNIFE]: ({state}, key) => {
    if (!state.playerInf[key].isDead) {
      state.waitingState.killedByKnife = key;
      return true;
    } else {
      return false;
    }
  }, 

  [MARK_POISON]: (state, key) => {
    if (!state.playerInf[key].isDead) {
      state.waitingState.killedByPoison = key;
      return true;
    } else {
      return false;
    }
  },
 
  [MARK_CURE]: (state, key) => {
    if (!state.playerInf[key].isDead) {
      state.waitingState.savedByCured = key;
      return true;
    } else {
      return false;
    }
  },

  [SHOOT_OUT]: (state, key) => {
    if (!state.playerInf[key].isDead) {
      deadPlayer = state.playerInf[key];
      deadPlayer.isDead = 4;  // killed by vote
      if (deadPlayer.identity == "villager") {
        state.restNum.restVillagers--;
      } else if (deadPlayer.identity == "wolf") {
        state.restNum.restWolves--;
      }
      else {
        state.restNum.restDeities--;
      }

      state.hunterShoot = false;
      return true;
    } else {
      return false;
    }
  },

  // voted people died
  // must vote one every day
  [VOTE_OUT]: (state, key) => {
    if (!state.playerInf[key].isDead) {
      deadPlayer = state.playerInf[key];
      deadPlayer.isDead = 2;  // killed by vote
      if (deadPlayer.identity == "villager") {
        state.restNum.restVillagers--;
      } else if (deadPlayer.identity == "wolf") {
        state.restNum.restWolves--;
      }
      else {
        state.restNum.restDeities--;
      }

      if (deadPlayer.identity == "hunter") {
        state.hunterShoot = true;
      }
      return true;
    } else {
      return false;
    }
  },

  [UPDATE_STATUS]: (state, payload) => {
    state.playerInf = payload.playerInf;
    state.isStart = payload.isStart;
    state.dayCount = payload.dayCount;
    state.activeState = payload.activeState;
    state.waitingState = payload.waitingState;
  },

  [NEXT_STEP]: (state, getters) => {
    var curState = state.activeState;
    var dayNum = 2;
    var firstdayNum = 3;
    var nightNum = getters.getNightNum; 

    if (state.dayCount === 0){
      if (curState[0] === 0) {  // night
        if (curState[1] + 1 < nightNum) {
          state.activeState[1]++;
        } else {
          state.activeState[0] = 1;
          state.activeState[1] = 0;
        }
      } else {  // day
        if (curState[1] + 1 < firstdayNum) {
          state.activeState[1]++;
        } else {
          state.activeState[0] = 0;
          state.activeState[1] = 0;
        }
      }
    } else {
      if (curState[0] === 0) {  // night
        if (curState[1] + 1 < nightNum) {
          state.activeState[1]++;
        } else {
          state.activeState[0] = 1;
          state.activeState[1] = 0;
        }
      } else {  // day
        if (curState[1] + 1 < dayNum) {
          state.activeState[1]++;
        } else {
          state.activeState[0] = 0;
          state.activeState[1] = 0;
        }
      }
  
    }
  },

  [CHECK_EVENTS]: ({state, getters}) => {
    if (state.activeState[0] == 0 && state.activeState[1]+1 == nightNum) {  // from night to day
      // only two people can make one die: wolf and witch (even if milk through)
      // witch has absolute fatal poison
      // while wolf can be defended by cure and guard
      if (getters.canHeDie) { // about wolf
        diedPlayer = state.playerInf[state.waitingState.killedByKnife];
        diedPlayer.isDead = 1;
        if (diedPlayer.identity == "villager") {
          state.restNum.restVillagers--;
        } else if (diedPlayer.identity == "wolf") {
          state.restNum.restWolves--;
        } else {
          state.restNum.restDeities--;
        }
      }
      if (state.waitingState.killedByPoison) {  // about poison
        diedPlayer = state.playerInf[state.waitingState.killedByPoison];
        diedPlayer.isDead = 3;
        if (diedPlayer.identity == "villager") {
          state.restNum.restVillagers--;
        } else if (diedPlayer.identity == "wolf") {
          state.restNum.restWolves--;
        } else {
          state.restNum.restDeities--;
        }
      }
      if (getters.canHunterShoot) {  // about hunter
        state.hunterShoot = true;
      }

      state.waitingState = {killedByKnife: 0, killedByPoison:0, savedByCured:0};
    }

    else if (state.activeState[0] == 0 && state.activeState[1] == 0){  // from day to night
      state.dayCount++;
    }
  },

  [GAME_OVER]: (state) => {
    state.isStart = false;
  }
  
})





const actions = () => ({
  initGame: ({commit}, payload) => {
    commit('INIT_GAME', payload);
  },

  markPoison: (commit, key) => {
    commit('MARK_POISON', key);
  },

  markKnife: (commit, key) => {
    commit('MARK_KNIFE', key);
  },

  markCure: (commit, key) => {
    commit('MARK_CURE', key);
  },

  shootOut: (commit, key) => {
    commit('SHOOT_OUT', key);
  },

  voteOut: (commit, key) => {
    commit('VOTE_OUT', key);
  },

  nextStep: ({commit, state, getters, dispatch}) => {
    commit('NEXT_STEP');
    commit('CHECK_EVENTS');
    axios.post('', {
      playerInf: state.playerInf,
      isStart: state.isStart,
      dayCount: state.dayCount,
      activeState: state.activeState,
      waitingState: state.waitingState
    })
    .then(function (response) {
      console.log(response);
      flag = getters.endGame;
      if (flag) {
        commit('GAME_OVER');
        dispatch('ranking/seperWinAndLose',flag, {root: ture});
        return flag;  // 1 represents wolves win, 2 represent good fellows win， 3 represent abort
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  // players fetch status from database
  updateStatus: (commit) => {
    axios.get('')
      .then(function (response) {
        console.log(response);
        commit('UPDATE_STATUS', payload);
        return true;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  }, 


  // 强行结束: 1 - 民神胜利， 2 - 狼胜利， 3 - 重开一局 (1, 2 都是调用ranking中的action，此处是3)
  abortGame: ({commit, dispatch}) => {
    commit('GAME_OVER');
    dispatch('gameInit/startGame', {root:true});
  }
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
