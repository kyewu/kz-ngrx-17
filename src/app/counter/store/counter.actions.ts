import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    Reset: emptyProps(),
    Increment: emptyProps(),
    Decrement: emptyProps(),
    SetCount: props<{ count: number }>(),
  },
});
