import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { SaladState } from './store/salad.reducer';
import { inject } from '@angular/core';
import { AppState } from '../store/app.reducer';
import { map, tap } from 'rxjs';
import { DoNavigate } from '../store/router.actions';

export const nameGuard: CanActivateFn = (route, state) => {
  const store: Store<{ app: AppState }> = inject(Store);
  const name$ = store.select((state) => state.app.name);

  return name$.pipe(
    map((name) => !!name),
    tap((pass) => {
      if (!pass) {
        store.dispatch(DoNavigate({ path: '' }));
      }
    })
  );
};
