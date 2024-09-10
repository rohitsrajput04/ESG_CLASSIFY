import { createAction, props } from "@ngrx/store";
import { AppConfig } from "../../models/app-config.model";

export const getAppConfigSuccess=createAction('[AppCpmfog] Get AppConfig Success',props<{payload:AppConfig}>());
export const getAppConfigFailure=createAction('[AppCpmfog] Get AppConfig Failure',props<{error:Error}>());
