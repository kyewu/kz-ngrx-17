import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterButtonsComponent} from '../counter-buttons/counter-buttons.component';
import {CounterOutputComponent} from '../counter-output/counter-output.component';
import {CounterInputComponent} from '../counter-input/counter-input.component';
import {Store} from '@ngrx/store';
import {selectUrl} from '@shared/store/router.selectors';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [CommonModule, CounterOutputComponent, CounterButtonsComponent, CounterInputComponent],
})
export class CounterComponent {
  private readonly routerStore = inject(Store);
  url$ = this.routerStore.select(selectUrl);
}
