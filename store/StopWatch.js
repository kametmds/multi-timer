/* eslint-disable no-console */
// stateに状態管理したいオブジェクトを書く。
export const state = () => ({
  timers: [
    {
      id: 1,
      name: 'タイマーNo.1',
      sec:0,
      timerOn: false
    }
  ]
})

// mutationsはstateのオブジェクトに変更を加えるメソッドを書く。
export const mutations = {
  // 時間リスト更新
  updateList (state, item) {
    state.timers = item;
  },
  // 時間カード追加
  addItem (state) {
    const maxId = state.timers.reduce(function(acc, value) {
      return acc > value.id ? acc : value.id
    }, 0);
    const pushItem = {
      id: maxId + 1,
      name: `タイマーNo.${maxId + 1}`,
      sec: 0,
      timerOn: false
    }
    state.timers.push(pushItem);
  },
  // 時間カード削除
  deleteItem (state, key) {
    state.timers.splice(key, 1);
  },
  // 時間更新
  updateItem (state, item) {
    state.timers.forEach((value) => {
      if(value.timerOn) value.sec = item.sec;
      value.timerOn = false;
    });
    state.timers[item.key].timerOn = item.timerOn;
  },
  // 名前変更
  changeName (state, item) {;
    state.timers[item.key].name = item.name;
  },
}

// gettersは他のページから状態管理しているデータにアクセスするときに使う。
export const getters = {
  timerList: (state) => {
    return state.timers;
  },
  getTimerById: (state) => (key) => {
    return state.timers[key];
  },
}

// actionsはストアを使うときのアクションを書く。
export const actions = {
  // 時間カード追加
  addItem({ commit }, text) {
    commit('addItem', text);
  },
  // 時間カード削除
  deleteItem({ commit }, key) {
    commit('deleteItem', key);
  },
  // 時間更新
  updateItem({ commit }, {key, sec, timerOn}) {
    commit('updateItem', {key, sec, timerOn});
  },
  // 名前変更
  changeName({ commit }, {key, name}) {
    commit('changeName', {key, name});
  }
}
