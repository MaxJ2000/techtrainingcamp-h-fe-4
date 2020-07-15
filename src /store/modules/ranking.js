// initial state
// shape: [{ key, winTimes }]
const state = () => ({
  rankings: [],
});

const getters = {
  rankings: (state, getters, rootState) => {
    return state.rankings.map(({ key, winTimes }) => {
      const name = rootState.identify.key2name(key);
      return {
        name,
        winTimes,
      };
    });
  },
};

const mutations = {
  win: (state, keyArr) => {
    for (key of keyArr) {
      for (rank of rankings) {
        if (rank.key === key) {
          rank.winTimes++;
        }
      }
    }
  },
};

gameOver: (state, rootState, whoWins) => {
  if (whoWins == 1) { // wolf win
    for (x in rootState.gameStatus.playerInf) {
      if (x.identity == "wolf") {
        wolfPlayer = state.rankings.find(player => player.name === x.name);  
        wolfPlayer.winTimes++;
      }
      else{
        goodfellowPlayer = state.rankings.find(player => player.name === x.name);  
        goodfellowPlayer.winTimes--;
      }
    }
  }

  else {  // kind win
    for (x in rootState.gameStatus.playerInf) {
      if (x.identity == "wolf") {
        wolfPlayer = state.rankings.find(player => player.name === x.name);  
        wolfPlayer.winTimes--;
      }
      else{
        goodfellowPlayer = state.rankings.find(player => player.name === x.name);  
        goodfellowPlayer.winTimes++;
      }
    }
  }
}