import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss'],
})
export class ToppingsComponent {
  @Input()
  toppings!: Topping[];

  @Output()
  choose = new EventEmitter<Topping>();

  toppingChange(event: MatSelectionListChange) {
    if (event.source.selectedOptions.hasValue()) {
      const topping = event.source.selectedOptions.selected[0].value as Topping;
      this.choose.emit(topping);
    }
  }
}
