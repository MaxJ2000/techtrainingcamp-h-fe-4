// initial state
// god: key
// nightNums: number
// time:
//      first array: 0 - night 1 - day
//      second array: if night , 0 - wolf , 1 - prophet , 2 - witch , 3 - guard
//                    if day, 0 - last night situation , 1 - first person speak , 2 - second person speak ......
const state = () => ({
  god: "",
  dayCount: 0,
  peopleNum: 0, //Not include God
  State: ["", "", ""],
  activeState: [0, 0],
  start: 0,
});

const getter = {
  isStart: (state) => state.start,
  dayCount: (state) => state.dayCount,
  activeState: (state) => state.activeState,
};

const mutation = {
  nextDay: (state) => {
    curState = state.activeState;
    dayNum = state.peopleNum;
    nightNum = state.State.length;
    if (curState[0] === 0) {
      if (curState[1] + 1 < nightNum) {
        curState[1]++;
      } else {
        curState[0] = 1;
        curState[1] = 0;
      }
    } else {
      if (curState[1] + 1 < dayNum) {
        curState[1]++;
      } else {
        curState[0] = 0;
        curState[1] = 0;
      }
    }
  },
};
