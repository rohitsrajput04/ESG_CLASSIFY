import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { AppConfig, StoreAppConfig } from "../../models/app-config.model";
import { Status } from "../../authenticate/models/authenticate.models";

const fSelector = createFeatureSelector('STORE_APP_CONFIG_NAMESPACE');

const getStatus = createSelector(
    fSelector as MemoizedSelector<Status, StoreAppConfig>,
    (state: StoreAppConfig): Status => state.status
);
const getAppConfig = createSelector(
    fSelector as MemoizedSelector<AppConfig, StoreAppConfig>,
    (state: StoreAppConfig): AppConfig => state && state.data ? state.data : null!
);
const getBaseApiUrl = createSelector(
    getAppConfig,
    (state: AppConfig): string => state && state.baseAPIUrl ? state.baseAPIUrl : null!
);
const getGraphqlApiUrl = createSelector(
    getAppConfig,
    (state: AppConfig): string => state && state.graphqlAPIUrl ? state.graphqlAPIUrl : null!
);

const getProdReleaseDate = createSelector(
    getAppConfig,
    (state: AppConfig): string => state && state.footerPrivacyNotificationDate ? state.footerPrivacyNotificationDate : null!
);
export const AppConfigSelectors = {
    getStatus, getAppConfig, getBaseApiUrl, getGraphqlApiUrl, getProdReleaseDate
}