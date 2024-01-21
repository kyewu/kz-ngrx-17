import { createFeature, createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

interface State {
  count: number;
}

export const initialState: State = { count: 0 };

export const counterFeature = createFeature({
  name: 'counter',
  reducer: createReducer(
    initialState,
    on(CounterActions.increment, (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    }),
    on(CounterActions.decrement, (state) => {
      return {
        ...state,
        count: state.count - 1,
      };
    }),
    on(CounterActions.reset, (state) => {
      return {
        ...state,
        count: 0,
      };
    }),
    on(CounterActions.setCount, (state, { count }) => {
      return {
        ...state,
        count: count,
      };
    })
  ),
});