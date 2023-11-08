import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, GetToppings, SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  toppingsLoading: boolean;
  dressing: string;
  chosenToppings: Topping[];
}

const initialState: SaladState = {
  toppings: [],
  toppingsLoading: false,
  dressing: 'Ranch',
  chosenToppings: [],
};

export const saladReducer = createReducer(
  initialState,
  on(SaveToppings, (state, action) => ({
    ...state,
    toppings: [...action.toppings],
    toppingsLoading: false
  })),
  on(ChooseTopping, (state, action) => ({
    ...state,
    chosenToppings: [...state.chosenToppings, { ...action }],
  })),
  on(GetToppings, (state, action) => ({ ...state, toppingsLoading: true }))
);

const saladFeatureSelector = createFeatureSelector<SaladState>('salad')
export const selectSaladPrice = createSelector(
  saladFeatureSelector,
  ({ chosenToppings }) => {
    return chosenToppings.reduce((totalPrice, topping) => {
      return totalPrice + topping.price
    }, 0)
  }
)