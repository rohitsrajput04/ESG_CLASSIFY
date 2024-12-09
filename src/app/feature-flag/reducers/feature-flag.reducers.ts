import { FeatureFlagActions } from "../actions";
import { FEATURE_FLAG_INITIAL_STATE, STATUS_LOADING_STATE, STATUS_SUCCESS_STATE } from "../constants";
import { StoreFeatureFlag } from "../models/feature-flag.model";
import { Action, createReducer, on } from "@ngrx/store";

const featureAccessFlagReducer = createReducer(

    FEATURE_FLAG_INITIAL_STATE,
    on(FeatureFlagActions.GetFeatureFlagRequest,state=>({

        ...state,
        featureFlag:null,
        status:{ ...STATUS_LOADING_STATE}
    })),
    on(
        FeatureFlagActions.GetFeatureFlagSuccess,
        (state: StoreFeatureFlag,{ payload })=> ({
            ...state,
            status:{ ...STATUS_SUCCESS_STATE},
            featureFlag:payload
        })
    ),

    on(
        FeatureFlagActions.GetFeatureFlagFailure,
        (state:StoreFeatureFlag,{error })=>({
            ...state,
            status:{ ...STATUS_SUCCESS_STATE,...error},
            featureFlag:null
        })
    ),
);
export function featureFlagReducer(
    state:StoreFeatureFlag | undefined,
    action:Action){
        return featureAccessFlagReducer(state,action);
    }
