import { createAction, props } from "@ngrx/store";
import { User } from "../models/authenticate.models";

export const getWebSsoUserRequest = createAction('[Authenticate] Get WebSso User Request');
export const getWebSsoUserSuccess = createAction('[Authenticate] Get WebSso User Success', props<{ payload: User }>());
export const getWebSsoUserFailure = createAction('[Authenticate] Get WebSso User Failure',props<{error:Error}>());
export const WebSsoAuthActions={
    getWebSsoUserRequest,
    getWebSsoUserSuccess,
    getWebSsoUserFailure
};

