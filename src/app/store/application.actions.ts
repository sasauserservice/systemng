import { createAction, props } from '@ngrx/store';

export const userGuest = createAction('UserGuest', 
	props<{user: any}>()
);

export const userConected = createAction('Userconnected', 
	props<{user: any}>()
);