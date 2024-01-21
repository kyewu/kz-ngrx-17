import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterActions} from '../store/counter.actions';
import {Store} from '@ngrx/store';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent {
  private readonly store = inject(Store);
  onIncrement(): void {
    this.store.dispatch(CounterActions.increment());
  }
  onDncrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }

  onReset(): void {
    this.store.dispatch(CounterActions.reset());
  }
}
