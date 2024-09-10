import { createReducer, on, Action } from "@ngrx/store";
import { AppConfigActions } from "../../actions";
import { StoreAppConfig, AppConfig } from "../../models/app-config.model";
import { APP_CONFIG_INITIAL_STATE, STATUS_SUCCESS_STATE, STATUS_INITIAL_STATE } from "../constants";

const reducer=createReducer(
    APP_CONFIG_INITIAL_STATE,
    //set payload on the store
    on(AppConfigActions.getAppConfigSuccess,(state:StoreAppConfig,{payload}:{payload:AppConfig})=>({
        ...state, 
        status:{...STATUS_SUCCESS_STATE},
        data:{
            ...payload,
        },
    })),
    on(AppConfigActions.getAppConfigFailure,(state:StoreAppConfig,error)=>({
        ...state, 
        status:{...STATUS_INITIAL_STATE,...error},
        data:null!,
    })),

);

export function appConfigReducer(state:StoreAppConfig | undefined,action:Action){
    return reducer(state,action);
}