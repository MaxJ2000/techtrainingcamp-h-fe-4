import axios from "axios";
import {
  CREATE_ROOM,
  INIT_ROOM,
  JOIN_ROOM,
  UPDATE_CURR_NUM,
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
const state = {
  roomID: "",
  isGod: false,
  wolfNum: 0,
  villagerNum: 0,
  deitiesList: [],
  playerNum: 0,
  currentPlayerNum: 0,
  killSideOrAll: true,
  name: "",
};

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
const mutations = {
  [CREATE_ROOM]: (state, roomID) => {
    state.roomID = roomID;
    state.isGod = true;
    state.name = "_God";
    //console.log(state.roomID);
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

  [JOIN_ROOM]: (state, { roomID, currentPlayerNum, playerNum, name }) => {
    state.roomID = roomID;
    state.currentPlayerNum = currentPlayerNum;
    state.playerNum = playerNum;
    state.name = name;
  },
  getValueWolf: (state, value) => {
    state.wolfNum = value;
  },
  getValueVillage: (state, value) => {
    state.villagerNum = value;
  },

  [UPDATE_CURR_NUM]: (state, { currentPlayerNum }) => {
    state.currentPlayerNum = currentPlayerNum;
  },
};

// actions
// createRoom: get room ID
// initRoom: god's configuration
// joinRoom: player joining
// startGame: after assign everything, and restart also from here
const actions = {
  createRoom: (context) => {
    axios
      .get("https://afe5o5.fn.thelarkcloud.com/createRoom")
      .then(function(response) {
        //console.log(response);
        context.commit("CREATE_ROOM", response.data.roomID);
        return true;
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },

  initRoom: (context, payload) => {
    //console.log(payload);
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/iniRoom", {
        roomID: payload.roomID,
        wolfNum: payload.wolfNum,
        villagerNum: payload.villagerNum,
        deitiesList: payload.deitiesList,
        killSideOrAll: payload.killSideOrAll,
        playerNum:
          parseInt(payload.wolfNum) +
          parseInt(payload.villagerNum) +
          parseInt(payload.deitiesList.length),
      })
      .then(function() {
        //console.log(response);
        context.commit("INIT_ROOM", {
          wolfNum: parseInt(payload.wolfNum),
          villagerNum: parseInt(payload.villagerNum),
          deitiesList: payload.deitiesList,
          killSideOrAll: payload.killSideOrAll,
        });
        return true;
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },

  joinRoom: (context, payload) => {
    //console.log(payload),
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/joinRoom", {
        roomID: payload.roomID,
        name: payload.name,
      })
      .then(function(response) {
        context.commit("JOIN_ROOM", {
          roomID: response.data.roomState.roomID,
          currentPlayerNum: response.data.roomState.currentPlayerNum,
          playerNum: response.data.roomState.playerNum,
          name: payload.name,
        });
        //console.log(response);
        return true;
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  },

  startGame: (context) => {
    // player's key starts from 0
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/startGame", {
        roomID: context.state.roomID,
      })
      .then(function(response) {
        //console.log("bro this is my response", response);
        context.dispatch("gameStatus/initGame", response.data.gameState, {
          root: true,
        }); // need to be completed after assign an action in gameStatus
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  updateCurrNum: (context, payload) => {
    //console.log("roomID", payload),
    axios
      .post("https://afe5o5.fn.thelarkcloud.com/joinRoom", {
        roomID: payload.roomID,
      })
      .then(function(response) {
        //console.log(response.data.roomState.currentPlayerNum);
        context.rootState.gameStatus.isStart = response.data.isStart;
        context.commit("UPDATE_CURR_NUM", {
          currentPlayerNum: response.data.roomState.currentPlayerNum,
        });
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
