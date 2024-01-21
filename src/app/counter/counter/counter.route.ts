import {Route} from '@angular/router';
import {CounterComponent} from './counter.component';
import {provideState} from '@ngrx/store';
import {counterFeature} from '../store/counter.reducers';

export const counterRoutes: Route[] = [
  {
    path: '',
    component: CounterComponent,
    providers: [
      provideState(counterFeature), // how to inject more
    ],
  },
];
