import axios from "axios";
import {
  WOLF_WIN,
  KIND_WIN,
  UPDATE_RANKINGS,
  SORT_LIST,
} from "../mutation_type";

// initial state
// rankings: [{ name, winTimes }]
// winGroup: [{name, identity}]
// loseGroup: [{name, identity}]
const state = {
  rankings: [],
  winGroup: [],
  loseGroup: [],
};

// getters
// sortedList: info to show on the leaderboard, shape: [{ name, winTimes }]
const getters = {};

// mutations
// WOLF_WIN: seperate two groups and update winTimes
// KIND_WIN: seperate two groups and update winTimes
// UPDATE_RANKINGS: update players' interface with data received from database
const mutations = {
  [SORT_LIST]: (state) => {
    state.rankings = state.rankings.sort(function(a, b) {
      return b.winTimes - a.winTimes;
    });
  },

  [WOLF_WIN]: (state, playerInf) => {
    let winGroup = [];
    let loseGroup = [];
    for (let x of playerInf) {
      if (x.identity == "狼人") {
        winGroup.push({ name: x.name, identity: x.identity });
        state.rankings.find((element) => element.name == x.name).winTimes++;
      } else {
        loseGroup.push({ name: x.name, identity: x.identity });
      }
    }
    //console.log("winGroup", winGroup);
    state.winGroup = winGroup;
    state.loseGroup = loseGroup;
  },

  [KIND_WIN]: (state, playerInf) => {
    let winGroup = [];
    let loseGroup = [];
    for (let x of playerInf) {
      if (x.identity == "狼人") {
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
    state.rankings = payload.rankings;
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
  sortedList: (context) => {
    context.commit("SORT_LIST");
  },

  seperWinAndLose: (context, payload) => {
    // 1 - wolves win, 2 - kind win
    // console.log("payload:", payload);
    if (payload.flag == 2) {
      context.dispatch("wolfWin", payload.playerInf);
    } else if (payload.flag == 1) {
      context.dispatch("kindWin", payload.playerInf);
    }
  },

  wolfWin: (context, playerInf) => {
    context.commit("WOLF_WIN", playerInf);
    //console.log(context.state);

    axios
      .post("https://afe5o5.fn.thelarkcloud.com/setRank", {
        // from gods to database
        roomID: context.rootState.gameInit.roomID,
        rankings: context.state.rankings,
        winGroup: context.state.winGroup,
        loseGroup: context.state.loseGroup,
      })
      .then(function(response) {
        //console.log(response);
      })
      .catch(function(error) {
        //console.log(error);
      });
  },

  kindWin: (context, playerInf) => {
    context.commit("KIND_WIN", playerInf);
    //console.log(context.state);
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/setRank", {
        // from gods to database
        roomID: context.rootState.gameInit.roomID,
        rankings: context.state.rankings,
        winGroup: context.state.winGroup,
        loseGroup: context.state.loseGroup,
      })
      .then(function(response) {
        //console.log(response);
      })
      .catch(function(error) {
        //console.log(error);
      });
  },

  updateRankings: (context) => {
    //console.log("roomID", context.rootState.gameInit.roomID);
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/getRank", {
        roomID: context.rootState.gameInit.roomID,
      }) // from database to player
      .then(function(response) {
        //console.log(response);
        context.commit("UPDATE_RANKINGS", response.data);
        return true;
      })
      .catch(function(error) {
        //console.log(error);
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
