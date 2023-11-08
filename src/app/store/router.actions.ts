import { createAction, props } from "@ngrx/store";

export const DoNavigate = createAction(
    "router/do-navigate",
    props<{ path: string }>()
)