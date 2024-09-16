import { state } from "@angular/animations";
import { createFeatureSelector, createSelector, StoreFeatureModule } from "@ngrx/store";
import { FeatureAccessFlag } from "../../../../shared/models/feature-access-flag";
import { StoreFeatureFlag } from "../models/feature-flag.model";
import { STORE_GET_FEATURE_FLAG_NAMESPACE } from "../constants";

const fFeatureFlagSelector = createFeatureSelector<StoreFeatureFlag>(
    STORE_GET_FEATURE_FLAG_NAMESPACE
);

const getFeatureFlag= createSelector(
    fFeatureFlagSelector,
    ( state:StoreFeatureFlag):FeatureAccessFlag[] =>
        state  && state.featureFlag ? state.featureFlag : <FeatureAccessFlag[]>[]

    );
    



export const FeatureFlagSelectors={
    getFeatureFlag:getFeatureFlag
};
