import { FeatureAccessFlag } from "../../../../shared/models/feature-access-flag";
import { Status } from "../../store/authenticate/models/authenticate.models";

export interface StoreFeatureFlag{
    status:Status;
    featureFlag:FeatureAccessFlag[] | null;
}