import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToppingsService } from '../../services/toppings.service';
import { GetToppings, SaveToppings } from './salad.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class SaladEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: ToppingsService
  ) {}

  getToppings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetToppings),
      mergeMap(() => {
        return this.toppingsService
          .getToppings()
          .pipe(map((toppings) => SaveToppings({ toppings })));
      })
    )
  );
}
