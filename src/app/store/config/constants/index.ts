import { Status } from "../../authenticate/models/authenticate.models";
import { StoreAppConfig } from "../../models/app-config.model";

export const STORE_APP_CONFIG_NAMESPACE='appConfig';
export const STATUS_INITIAL_STATE:Status={
    loading:false,
    success:false,
    error:null!
};
export const STATUS_LOADING_STATE:Status={
    loading:true,
    success:false,
    error:null!
};export const STATUS_SUCCESS_STATE:Status={
    loading:false,
    success:true,
    error:null!
};
export const APP_CONFIG_INITIAL_STATE:StoreAppConfig={
    status:{...STATUS_INITIAL_STATE},
    data:{
        baseAPIUrl: '',
        graphqlAPIUrl: '',
        footerPrivacyNotificationDate: '',
        uploadAPIUrl: '',
        uploadHistoricalDealAPIUrl: ""
    }
};