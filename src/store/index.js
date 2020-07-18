// import Vue from 'vue';
// import Vuex from 'vuex';
// // import gameStatus from './modules/gameStatus'

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         roomNum: 5
//       },
//       mutations: {
//         increment: (state) => {
//           state.roomNum++
//         },
//         decrement: (state) => {
//           state.roomNum--
//         },
//       },
//       actions: {
//         increment: ({commit}) => commit('increment'),
//         decrement: ({commit}) => commit('decrement')
//       },
//     //   getters
// })

import Vue from "vue";
import Vuex from "vuex";
import gameInit from "./modules/gameInit";
import gameStatus from "./modules/gameStatus";
import ranking from "./modules/ranking";
import createPersistedState from "vuex-persistedstate";
// import createLogger from '../../../src/plugins/logger'
import * as Cookies from "js-cookie";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    gameInit,
    gameStatus,
    ranking,
  },
  plugins: [createPersistedState()],

  // strict: debug,
  // plugins: debug ? [createLogger()] : []
});
