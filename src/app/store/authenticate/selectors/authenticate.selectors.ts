import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Status, StoreAuth, User } from "../models/authenticate.models";
import { state } from "@angular/animations";

const fAuthSelector = createFeatureSelector<StoreAuth>('STORE_WEB_SSO_USER_NAMESPACE');

const getWebSsoUser = createSelector(fAuthSelector, (state: StoreAuth): User | null =>
    state && state.user ? state.user : null
);
const getStatus = createSelector(
    fAuthSelector,
    (state: StoreAuth): Status | null =>
        state && state.status ? state.status : null);

export const WebSsoAuthSelectors = {
    getWebSsoUser,
    getStatus
}