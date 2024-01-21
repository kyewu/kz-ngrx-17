import { counterFeature } from './counter.reducers';

const { selectCounterState, selectCount } = counterFeature;

export const counterQuery = {
  selectCounterState,
  selectCount,
};
