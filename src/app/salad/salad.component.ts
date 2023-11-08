import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChooseTopping, GetToppings } from './store/salad.actions';
import { Observable } from 'rxjs';
import { Topping } from '../models/topping.model';
import { SaladState, selectSaladPrice } from './store/salad.reducer';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaladComponent implements OnInit {
  toppings$!: Observable<Topping[]>;
  toppingsLoading$!: Observable<boolean>;
  chosenToppings$!: Observable<Topping[]>;
  totalPrice$!: Observable<number>;

  constructor(private store: Store<{ salad: SaladState }>) {}

  ngOnInit() {
    this.toppings$ = this.store.select((state) => state.salad.toppings);
    this.toppingsLoading$ = this.store.select((state) => state.salad.toppingsLoading);
    this.chosenToppings$ = this.store.select((state) => state.salad.chosenToppings);
    this.totalPrice$ = this.store.select(selectSaladPrice);

    this.store.dispatch(GetToppings());
  }

  chooseTopping(topping: Topping) {
    this.store.dispatch(ChooseTopping(topping))
  }

  logChangeDetection() {
    console.log("SaladComponent : Changed detection executed")
    return true
  }
}
