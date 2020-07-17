import axios from "axios";
import { WOLF_WIN, KIND_WIN, UPDATE_RANKINGS } from "../mutation_type";

// initial state
// rankings: [{ name, winTimes }]
// winGroup: [{name, identity}]
// loseGroup: [{name, identity}]
const state = () => ({
  rankings: [],
  winGroup: [],
  loseGroup: [],
});

// getters
// sortedList: info to show on the leaderboard, shape: [{ name, winTimes }]
const getters = () => ({
  sortedList: (state) => {
    return state.rankings.sort(function(a, b) {
      return a.winTimes - b.winTimes;
    });
  },
});

// mutations
// WOLF_WIN: seperate two groups and update winTimes
// KIND_WIN: seperate two groups and update winTimes
// UPDATE_RANKINGS: update players' interface with data received from database
const mutations = {
  [WOLF_WIN]: (state, playerInf) => {
    let winGroup = [];
    let loseGroup = [];
    for (let x in playerInf) {
      if (x.identity == "wolf") {
        winGroup.push({ name: x.name, identity: x.identity });
        state.rankings.find((element) => element.name == x.name).winTimes++;
      } else {
        loseGroup.push({ name: x.name, identity: x.identity });
      }
    }
    state.winGroup = winGroup;
    state.loseGroup = loseGroup;
  },

  [KIND_WIN]: (state, playerInf) => {
    let winGroup = [];
    let loseGroup = [];
    for (let x in playerInf) {
      if (x.identity == "wolf") {
        loseGroup.push({ name: x.name, identity: x.identity });
      } else {
        winGroup.push({ name: x.name, identity: x.identity });
        state.rankings.find((element) => element.name == x.name).winTimes++;
      }
    }
    state.winGroup = winGroup;
    state.loseGroup = loseGroup;
  },

  [UPDATE_RANKINGS]: (state, payload) => {
    state.winTimes = payload.winTimes;
    state.winGroup = payload.winGroup;
    state.loseGroup = payload.loseGroup;
  },
};

// actions
// seperWinAndLose: system's auto judging to end the game
// wolfWin: two situation to be infer: one from seperWinAndLose(auto judging), one from god's control
// kindWin: same as wolfWin
// updateRankings: after find isStart is false, launch the action
const actions = {
  seperWinAndLose: ({ dispatch }, payload) => {
    // 1 - wolves win, 2 - kind win
    if (payload.flag == 1) {
      dispatch("wolfWin", payload.playerInf);
    } else if (payload.flag == 2) {
      dispatch("kindWin", payload.playerInf);
    }
  },

  wolfWin: ({ commit, state }, playerInf) => {
    commit("WOLF_WIN", playerInf);
    axios
      .post("", {
        // from gods to database
        winTimes: state.winTimes,
        winGroup: state.winGroup,
        loseGroup: state.loseGroup,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  kindWin: ({ commit }, playerInf) => {
    commit("KIND_WIN", playerInf);
  },

  updateRankings: ({ commit }) => {
    axios
      .get("") // from database to player
      .then(function(response) {
        console.log(response);
        commit("UPDATE_RANKINGS", response);
        return true;
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
