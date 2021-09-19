/* eslint-disable no-console */
// stateに状態管理したいオブジェクトを書く。
export const state = () => ({
  timers: [
    {
      id:1, sec:10, timerOn: false,
    }
  ]
})

// mutationsはstateのオブジェクトに変更を加えるメソッドを書く。
export const mutations = {
  // 追加
  addItem (state) {
    console.log("----------addItem----------");
    const maxId = state.timers.reduce(function(acc, value) {
      return acc > value.id ? acc : value.id
    }, 0);
    // const maxIdItem = Math.max.apply(null, state.timers.map(i => {return i.id;}))
    const pushItem = {id: maxId + 1, sec:0, timerOn: false,}
    state.timers.push(pushItem);
  },
  // 削除
  deleteItem (state, key) {
    console.log("----------deleteItem----------");
    state.timers.splice(key, 1);
  },
  // 更新
  updateItem (state, item) {
    console.log("----------updateItem----------");
    console.log(item);
    state.timers[item.key].sec = item.sec;
    state.timers.forEach((value) => {
      if(value.timerOn) item.timerOn = false;
    });
    state.timers[item.key].timerOn = item.timerOn;
  },
}

// gettersは他のページから状態管理しているデータにアクセスするときに使う。
export const getters = {
  timerList(state) {
    return state.timers;
  },
  getTimerById: (state) => (key) => {
    return state.timers[key].sec;
  },
}

// actionsはストアを使うときのアクションを書く。
export const actions = {
  // 追加
  add({ commit }, text) {
    commit('addItem', text);
  },
  // 削除
  delete({ commit }, key) {
    commit('deleteItem', key);
  },
  // 更新
  update({ commit }, {key, sec, timerOn}) {
    commit('updateItem', {key, sec, timerOn});
  }
}
