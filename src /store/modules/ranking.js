import {
  WOLF_WIN, KIND_WIN
} from '../mutation_type'

// initial state
// rankings: [{ name, winTimes }]
// winGroup: [{name, identity}]
// loseGroup: [{name, identity}]
const state = () => ({
  rankings: [],
  winGroup: [],
  loseGroup: []
});

const getters = () => ({
  sortedList: (state) => {
    return state.rankings.sort(function (a, b) {
      return (a.winTimes - b.winTimes)
    });
  },
});


const mutations = () => ({
  [WOLF_WIN]: (state, playerInf) => {
    winGroup = [];
    loseGroup = [];
    for(let x in playerInf){
      if (x.identity == "wolf") {
        winGroup.push({name:x.name, identity:x.identity});
        state.rankings.find(element => element.name == x.name).winTimes++;
      }
      else {
        loseGroup.push({name:x.name, identity:x.identity});
      }
    }
    state.winGroup = winGroup;
    state.loseGroup = loseGroup;
  },

  [KIND_WIN]: (state, playerInf) => {
    winGroup = [];
    loseGroup = [];
    for(let x in playerInf){
      if (x.identity == "wolf") {
        loseGroup.push({name:x.name, identity:x.identity});
      }
      else {
        winGroup.push({name:x.name, identity:x.identity});
        state.rankings.find(element => element.name == x.name).winTimes++;
      }
    }
    state.winGroup = winGroup;
    state.loseGroup = loseGroup;
  }
})

const actions = () => ({
  seperWinAndLose: ({commit, dispatch}, payload) => {  // 1 - wolves win, 2 - kind win
    if (payload.flag == 1){
      dispatch('wolfWin', payload.playerInf);
    } else if (payload.flag == 2) {
      dispatch('kindWin', payload.playerInf);
    }
  },

  wolfWin: ({commit}, playerInf) => {
    commit('WOLF_WIN', playerInf);
  },

  kindWin: ({commit}, playerInf) => {
    commit('KIND_WIN', playerInf);
  }
})


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}


