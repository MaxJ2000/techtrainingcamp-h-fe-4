import axios from "axios";
import {
  INIT_GAME,
  UPDATE_STATUS,
  NEXT_STEP,
  GAME_OVER,
  MARK_KNIFE,
  MARK_POISON,
  MARK_CURE,
  SHOOT_OUT,
  VOTE_OUT,
  CHECK_EVENTS,
} from "../mutation_type";

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
// hunterShoot: NOTE that players don't need this info
const state = {
  playerInf: [],
  // isMyTurn: false,
  restNum: { restWolves: 0, restVillagers: 0, restDeities: 0 },
  dayCount: 0,
  activeState: [0, 0],
  waitingState: { killedByKnife: -1, killedByPoison: -1, savedByCured: -1 },
  isStart: false,
  hunterShoot: false,
};

// getters
// getNightNum: can be adjusted by deities. now consider: wolf, prophet, witch, guard, hunter
// canHunterShoot: only if hunter is killed by wolf can he shoot
// canHeDie: deal with the waitingState every night-day change
// endGame: system's auto judging if the game ends
const getters = {
  // getNightNum: (state, getters, rootState) => {
  //   // wolf, prophet, witch, guard, hunter
  // var nightNum = 1;
  // let x;
  // for (x in rootState.gameInit.deitiesList) {
  //   if (x == "prophet") {
  //     nightNum++;
  //   } else if (x == "witch") {
  //     nightNum++;
  //   } else if (x == "guard") {
  //     nightNum++;
  //   } else if (x == "hunter") {
  //     nightNum++;
  //   }
  // }
  // return nightNum;
  // },

  canHunterShoot: (state) => {
    let key =
      state.playerInf.findIndex((element) => element.identity == "hunter") + 1;
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
    } else {
      if (
        (state.restNum.restWolves == 1 &&
          !state.restNum.restVillagers &&
          state.restNum.restDeities == 1) ||
        (state.restNum.restWolves == 1 &&
          state.restNum.restVillagers == 1 &&
          !state.restNum.restDeities)
      ) {
        return 2;
      }
    }

    if (!state.isStart) {
      return 3;
    }

    return 0;
  },
};

// mutations
// INIT_GAME: initialize the game (all the states)
// MARK_KNIFE: don't need to explain
// MARK_POISON: don't need to explain
// MARK_CURE: don't need to explain
// SHOOT_OUT: NOTE that shoot and vote don't need to wait, can be exert right away
// VOTE_OUT: only the MARK mutations add to waitingState
// UPDATE_STATUS: players get info from database
// NEXT_STEP: adjust activeState
// CHECK_EVENTS: deal with situations during steps: people die, hunter shoot and daycount
// GAME_OVER: only turn isStart to false
const mutations = {
  [INIT_GAME]: (state, payload) => {
    state.playerInf = payload.playerInf;
    state.restNum = payload.restNum;
    state.dayCount = payload.dayCount;
    state.activeState = payload.activeState;
    // state.waitingState = payload.waitingState;
    state.isStart = true;
    state.hunterShoot = false;
  },

  [MARK_KNIFE]: (state, key) => {
    console.log(state);
    console.log(key);
    if (state.playerInf[key].isAlive > 0) {
      state.waitingState.killedByKnife = key;
      return true;
    } else {
      return false;
    }
  },

  [MARK_POISON]: (state, key) => {
    if (state.playerInf[key].isAlive) {
      state.waitingState.killedByPoison = key;
      return true;
    } else {
      return false;
    }
  },

  [MARK_CURE]: (state, key) => {
    if (state.playerInf[key].isAlive > 0) {
      state.waitingState.savedByCured = key;
      return true;
    } else {
      return false;
    }
  },

  [SHOOT_OUT]: (state, key) => {
    if (state.playerInf[key].isAlive > 0) {
      let deadPlayer = state.playerInf[key];
      deadPlayer.isAlive = -4; // killed by vote
      if (deadPlayer.identity == "villager") {
        state.restNum.restVillagers--;
      } else if (deadPlayer.identity == "wolf") {
        state.restNum.restWolves--;
      } else {
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
    if (state.playerInf[key].isAlive > 0) {
      let deadPlayer = state.playerInf[key];
      deadPlayer.isAlive = -2; // killed by vote
      if (deadPlayer.identity == "villager") {
        state.restNum.restVillagers--;
      } else if (deadPlayer.identity == "wolf") {
        state.restNum.restWolves--;
      } else {
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

  [UPDATE_STATUS]: (state, { isStart, playerInf, dayCount, activeState }) => {
    state.playerInf = playerInf;
    state.isStart = isStart;
    state.dayCount = dayCount;
    state.activeState = activeState;
  },

  [NEXT_STEP]: (state, payload) => {
    console.log("I am here!");
    var curState = state.activeState;
    var dayNum = 2;
    var firstdayNum = 3;

    var nightNum = 1;
    let x;
    for (x in payload) {
      if (x == "prophet") {
        nightNum++;
      } else if (x == "witch") {
        nightNum++;
      } else if (x == "guard") {
        nightNum++;
      } else if (x == "hunter") {
        nightNum++;
      }
    }
    // var nightNum = getNightNum;

    console.log(nightNum);
    console.log(state.activeState);
    if (state.dayCount === 0) {
      if (curState[0] === 0) {
        // night
        if (curState[1] + 1 < nightNum) {
          // state.activeState[1]++;
          state.activeState.splice(1, 1, state.activeState[1] + 1);
        } else {
          state.activeState.splice(1, 1, 0);
          state.activeState.splice(0, 1, 1);
          // state.activeState[0] = 1;
          // state.activeState[1] = 0;
        }
      } else {
        // day
        if (curState[1] + 1 < firstdayNum) {
          // state.activeState[1]++;
          state.activeState.splice(1, 1, state.activeState[1] + 1);
        } else {
          // state.activeState[0] = 0;
          // state.activeState[1] = 0;
          state.activeState.splice(1, 1, 0);
          state.activeState.splice(0, 1, 0);
        }
      }
    } else {
      if (curState[0] === 0) {
        // night
        if (curState[1] + 1 < nightNum) {
          // state.activeState[1]++;
          state.activeState.splice(1, 1, state.activeState[1] + 1);
        } else {
          state.activeState.splice(1, 1, 0);
          state.activeState.splice(0, 1, 1);
        }
      } else {
        // day
        if (curState[1] + 1 < dayNum) {
          state.activeState.splice(1, 1, state.activeState[1] + 1);
        } else {
          state.activeState.splice(1, 1, 0);
          state.activeState.splice(0, 1, 0);
        }
      }
    }
  },

  [CHECK_EVENTS]: (state, getters) => {
    var nightNum = getters.getNightNum;
    if (state.activeState[0] == 0 && state.activeState[1] + 1 == nightNum) {
      // from night to day
      // only two people can make one die: wolf and witch (even if milk through)
      // witch has absolute fatal poison
      // while wolf can be defended by cure and guard
      if (getters.canHeDie) {
        // about wolf
        let diedPlayer = state.playerInf[state.waitingState.killedByKnife];
        console.log("diedPlayer", diedPlayer);
        diedPlayer.isAlive = -1;
        if (diedPlayer.identity == "villager") {
          state.restNum.restVillagers--;
        } else if (diedPlayer.identity == "wolf") {
          state.restNum.restWolves--;
        } else {
          state.restNum.restDeities--;
        }
      }
      if (state.waitingState.killedByPoison) {
        // about poison
        let diedPlayer = state.playerInf[state.waitingState.killedByPoison];
        diedPlayer.isAlive = -3;
        if (diedPlayer.identity == "villager") {
          state.restNum.restVillagers--;
        } else if (diedPlayer.identity == "wolf") {
          state.restNum.restWolves--;
        } else {
          state.restNum.restDeities--;
        }
      }
      if (getters.canHunterShoot) {
        // about hunter
        state.hunterShoot = true;
      }

      state.waitingState = {
        killedByKnife: 0,
        killedByPoison: 0,
        savedByCured: 0,
      };
    } else if (state.activeState[0] == 0 && state.activeState[1] == 0) {
      // from day to night
      state.dayCount++;
    }
  },

  [GAME_OVER]: (state) => {
    state.isStart = false;
  },
};

// actions
// initGame: only infered from gameInit/startGame
// markKnife: don't need to explain
// markPoison: don't need to explain
// markCure: don't need to explain
// shootOut: NOTE that shoot and vote don't need to wait, can be exert right away
// voteOut: only the MARK actions add to waitingState
// nextStep: adjust activeState, god's control
// updateStatus: deal with situations during steps: people die, hunter shoot and daycount
// abortGame: restart the game right away
const actions = {
  initGame: (context, payload) => {
    console.log(payload);
    context.commit("INIT_GAME", payload);
  },

  markPoison: (context, key) => {
    context.commit("MARK_POISON", key);
  },

  markKnife: (context, key) => {
    context.commit("MARK_KNIFE", key);
  },

  markCure: (context, key) => {
    context.commit("MARK_CURE", key);
  },

  shootOut: (context, key) => {
    context.commit("SHOOT_OUT", key);
  },

  voteOut: (context, key) => {
    context.commit("VOTE_OUT", key);
  },

  nextStep: (context) => {
    console.log("sss");
    context.commit("NEXT_STEP", context.rootState.gameInit.deitiesList);
    context.commit("CHECK_EVENTS", getters);
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/changeState", {
        playerInf: context.state.playerInf,
        isStart: context.state.isStart,
        dayCount: context.state.dayCount,
        activeState: context.state.activeState,
        waitingState: context.state.waitingState,
        roomID: context.rootState.gameInit.roomID,
        restNum: context.state.restNum,
      })
      .then(function(response) {
        console.log(response);
        let flag = context.getters.endGame;
        if (flag) {
          // commit("GAME_OVER");
          // dispatch("ranking/seperWinAndLose", flag, { root: true });
          return flag; // 1 represents wolves win, 2 represent good fellows win， 3 represent abort
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // players fetch status from database
  updateStatus: (context, payload) => {
    console.log("im here"),
      axios
        .post("https://afe5o5.fn.thelarkcloud.com/getState", {
          roomID: payload.roomID,
          name: payload.name,
        })
        .then(function(response) {
          context.commit("UPDATE_STATUS", {
            isStart: response.data.gameState.isStart,
            playerInf: response.data.gameState.playerInf,
            dayCount: response.data.gameState.dayCount,
            activeState: response.data.gameState.activeState,
          });
          console.log(response);
          return true;
        })
        .catch(function(error) {
          console.log(error);
          return false;
        });
  },

  // 强行结束: 1 - 民神胜利， 2 - 狼胜利， 3 - 重开一局 (1, 2 都是调用ranking中的action，此处是3)
  abortGame: ({ commit, dispatch }) => {
    commit("GAME_OVER");
    dispatch("gameInit/startGame", { root: true });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
