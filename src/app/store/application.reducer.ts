import { createReducer, on } from '@ngrx/store';

import * as states from './application.actions';

export const initialState = {};

const _applicationReducer = createReducer(
	initialState, 
	on(states.userGuest, state => state = {id: 0, email: '', name: '', groups: []} ),
	on(states.userConected, (state, { user }) => user)
);

export function applicationReducer(state:any, action:any){
	return _applicationReducer(state, action);
}