import { createAction, props } from "@ngrx/store";
import { FeatureAccessFlag } from "../../../../shared/models/feature-access-flag";

export const GetFeatureFlagRequest = createAction(
  '[FeatureFlag] Get Feature Flag Request'
);
export const GetFeatureFlagSuccess = createAction(
  '[FeatureFlag] Get Feature Flag Success',
  props<{payload:FeatureAccessFlag[]}>());
  

  export const GetFeatureFlagFailure = createAction( 
    '[FeatureFlag] Get Feature Flag Failure',
    props<{error:Error}>());
    
  