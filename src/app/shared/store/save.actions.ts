import { createAction, props } from "@ngrx/store";

export const write = createAction('write',props<{ value: string }>());