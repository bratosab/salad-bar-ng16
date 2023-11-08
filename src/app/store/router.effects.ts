import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DoNavigate } from "./router.actions";
import { tap } from "rxjs";

@Injectable()
export class RouterEffects {
    constructor(private actions$: Actions, private router: Router){}

    doNavigation$ = createEffect(() => this.actions$.pipe(
        ofType(DoNavigate),
        tap(action => {
            this.router.navigate([ action.path ])
        })
    ), { dispatch: false })
}