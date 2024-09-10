import { state } from "@angular/animations"
import { Action, createReducer, on } from "@ngrx/store"
import { WebSsoAuthActions } from "../actions/authenticate.actions"
import { StoreAuth } from "../models/authenticate.models"
import { AUTH_INITIAL_STATE, STATUS_INITIAL_STATE, STATUS_LOADING_STATE, STATUS_SUCCESS_STATE } from "../constants";

const reducer = createReducer(
AUTH_INITIAL_STATE,
on(
WebSsoAuthActions.getWebSsoUserRequest,
state => ({
...state,
user: null,
status: {...STATUS_LOADING_STATE }
})),
on(
WebSsoAuthActions.getWebSsoUserSuccess,
(state: StoreAuth,{payload}) => ({
...state,
status: { ...STATUS_SUCCESS_STATE},
user: payload
})
),
on(
WebSsoAuthActions.getWebSsoUserFailure,
(state: StoreAuth, { error }) => ({
...state,
status: { ...STATUS_INITIAL_STATE, ...error },
user: null
})
)
);

export function authReducer(state:StoreAuth|undefined,action:Action){
    return reducer(state,action);
}