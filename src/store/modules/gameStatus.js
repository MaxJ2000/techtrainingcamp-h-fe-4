// initial state
// god: key
// nightNums: number
// time:
//      first array: 0 - night 1 - day
//      second array: if night , 0 - wolf , 1 - prophet , 2 - witch , 3 - guard
//                    if day, 0 - last night situation , 1 - first person speak , 2 - second person speak ......
const state = () => ({
  god: "",
  nightNums: 0,
  active: [[], []],
  start: 0,
});
