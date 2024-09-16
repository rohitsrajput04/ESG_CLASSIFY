import { error } from "console";
import { Status } from "../../store/authenticate/models/authenticate.models";
import { StoreFeatureFlag } from "../models/feature-flag.model";

export const STORE_GET_FEATURE_FLAG_NAMESPACE='get-feature-flag';
export const STATUS_INITIAL_STATE={
    loading:false,
    success:false,
    error:null!

};
export const STATUS_LOADING_STATE:Status={
    loading:true,
    success:false,
    error:null!
    };

export const STATUS_SUCCESS_STATE:Status={
    loading:false,
    success:true,
    error:null!
    };

export const FEATURE_FLAG_INITIAL_STATE:StoreFeatureFlag={
  status:{...STATUS_INITIAL_STATE},
  featureFlag:[]
    }