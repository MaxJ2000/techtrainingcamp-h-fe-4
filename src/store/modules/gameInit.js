import axios from "axios";
import {
  CREATE_ROOM,
  INIT_ROOM,
  JOIN_ROOM,
  // START_GAME,
} from "../mutation_type";

// initial state
// roomID: number
// isGod: key
// wolfNum: number
// villagerNum: number
// deitiesList: [ id ]
// playerNum: number
// currentPlayerNum: number
// killSideOrAll: bool
//    false: Side, true: All
const state = () => ({
  roomID: "112",
  isGod: false,
  wolfNum: 0,
  villagerNum: 0,
  deitiesList: [],
  playerNum: 0,
  currentPlayerNum: 0,
  killSideOrAll: true,
});

// getters
// ableToCreate: only when players number larger than 6 can we launch the game
// ableToStart: check if can start, (this work can also be done in front-end)
const getters = () => ({
  ableToCreate: (state) => {
    return state.wolfNum + state.villagerNum + state.deitiesList.length > 6;
  },
  ableToStart: (state) => {
    // more to judge
    return state.currentPlayerNum == state.playerNum;
  },
});

// mutations
// CREATE_ROOM: initialize the game
// INIT_ROOM: god config the settings
// JOIN_ROOM: player's work
const mutations = () => ({
  [CREATE_ROOM]: (state, roomID) => {
    state.roomID = roomID;
    state.isGod = true;
    console.log(state.roomID);
  },

  [INIT_ROOM]: (
    state,
    { wolfNum, villagerNum, deitiesList, killSideOrAll }
  ) => {
    // state.roomID = JIANGJUN_giveMeOneRoomId()
    state.wolfNum = wolfNum;
    state.villagerNum = villagerNum;
    state.deitiesList = deitiesList;
    state.playerNum =
      state.wolfNum + state.villagerNum + state.deitiesList.length;
    state.killSideOrAll = killSideOrAll;
  },

  [JOIN_ROOM]: (state, { roomID, currentPlayerNum }) => {
    state.roomID = roomID;
    state.currentPlayerNum = currentPlayerNum;
  },
});

// actions
// createRoom: get room ID
// initRoom: god's configuration
// joinRoom: player joining
// startGame: after assign everything, and restart also from here
const actions = () => ({
  createRoom: context => {
    axios
      .get("https://afe5o5.fn.thelarkcloud.com/createRoom")
      .then(function(response) {
        console.log(response);
        context.commit("CREATE_ROOM", response.data.roomID);
        return true;
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },

  initRoom: (
    { commit, state },
    wolfNum,
    villagerNum,
    deitiesList,
    killSideOrAll
  ) => {
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/iniRoom", {
        roomID: state.roomID,
        wolfNum: wolfNum,
        villagerNum: villagerNum,
        deitiesList: deitiesList,
        killSideOrAll: killSideOrAll,
        playerNum: state.wolfNum + state.villagerNum + state.deitiesList.length,
      })
      .then(function(response) {
        console.log(response);
        commit("initRoom", {
          wolfNum: wolfNum,
          villagerNum: villagerNum,
          deitiesList: deitiesList,
          killSideOrAll: killSideOrAll,
        });
        return true;
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },

  joinRoom: (commit, roomID, name) => {
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/joinRoom", {
        roomID: roomID,
        name: name,
      })
      .then(function(response) {
        commit("JOIN_ROOM", {
          roomID: response.roomState.roomID,
          currentPlayerNum: response.roomState.currentPlayerNum,
        });
        console.log(response);
        return true;
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },

  startGame: ({ dispatch, state }) => {
    // player's key starts from 0

    axios
      .post("https://afe5o5.fn.thelarkcloud.com/startGame", {
        roomID: state.roomID,
      })
      .then(function(response) {
        dispatch("gameStatus/initGame", response.gameStatus, { root: true }); // need to be completed after assign an action in gameStatus
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
