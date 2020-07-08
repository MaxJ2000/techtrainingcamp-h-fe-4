// initial state
// personalInf: [{ key, name, identify, status }]
// status [0,0,0]
const state = () => ({
  playerInf: [],
});
const getter = {
  key2item: (state) => (key) => {
    for (item in state.playerInf) {
      if (item.key === key) {
        return item;
      }
    }
  },
  key2name: (state, getter) => (key) => {
    return getter.key2item(key).name;
  },
  key2identify: (state, getter) => (key) => {
    return getter.key2item(key).identify;
  },
};

const mutation = {
  setIdentify: (state, { key, identify }) => {
    this.$store.getters.key2item(key).identify = identify;
  },
  setName: (state, { key, name }) => {
    this.$store.getters.key2item(key).name = name;
  },
  setStatus: (state, { key, status }) => {
    this.$store.getters.key2item(key).status = status;
  },
};
