import { IndexState } from '@/types/views/index.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as IndexApi from '@/api/index';

const state: IndexState = {
  status: '',
  pageNumber: 1,
  pageSize: 10,
};

const actions: ActionTree<IndexState, any> = {
  UPDATE_STATE_ASYN({ commit }, data: IndexState) {
    commit('UPDATE_STATE', data);
    return data;
  },
  GET_DATA_ASYN() {
    IndexApi.getData();
  },
  // 获取列表数据
  GET_DATA_ASYN_DATA({ commit }, data) {
   return  IndexApi.getReviewData(data).then((res) => {
      commit('UPDATE_STATE', res);
      return res;
    });
  },
};

// 强制使用getter获取state
const getters: GetterTree<IndexState, any> = {
  author: (state: IndexState) => state.author,
}

// 更改state
const mutations: MutationTree<IndexState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: IndexState, data: IndexState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return; }
      state[key] = data[key];
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

