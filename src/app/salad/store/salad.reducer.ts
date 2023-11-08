import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  dressing: string;
  chosenToppings: Topping[];
}

const initialState: SaladState = {
  toppings: [],
  dressing: 'Ranch',
  chosenToppings: [],
};

export const saladReducer = createReducer(
  initialState,
  on(SaveToppings, (state, action) => ({
    ...state,
    toppings: [...action.toppings],
  })),
  on(ChooseTopping, (state, action) => ({
    ...state,
    chosenToppings: [...state.chosenToppings, { ...action }],
  }))
);
