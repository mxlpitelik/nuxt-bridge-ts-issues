// eslint-disable-next-line import/named
import { GetterTree } from 'vuex';

export const state = () => ({});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  hello() {
    return 'hello'
  },
};
