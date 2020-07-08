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
