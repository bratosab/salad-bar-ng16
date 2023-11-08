import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

enum SaladActionTypes {
  GetToppings = 'salad/get-toppings',
  SaveToppings = 'salad/save-toppings',
  ChooseTopping = 'salad/choose-topping',
}

export const GetToppings = createAction(SaladActionTypes.GetToppings);
export const SaveToppings = createAction(
  SaladActionTypes.SaveToppings,
  props<{ toppings: Topping[] }>()
);
export const ChooseTopping = createAction(
  SaladActionTypes.ChooseTopping,
  props<Topping>()
);
