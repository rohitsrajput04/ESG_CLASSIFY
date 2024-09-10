import { AppConfigService } from "../../app-init/services/app-config.service";
import { Status } from "../authenticate/models/authenticate.models";

export interface StoreAppConfig{
    status:Status;
    data:AppConfig;
}
export interface AppConfig{
    baseAPIUrl:string;
    graphqlAPIUrl:string;
    footerPrivacyNotificationDate?:string;
    uploadAPIUrl:string;
    uploadHistoricalDealAPIUrl:string;
    
}