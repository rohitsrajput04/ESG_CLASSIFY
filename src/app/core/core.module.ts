import { NgModule, Optional, SkipSelf } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { STORE_GET_FEATURE_FLAG_NAMESPACE } from "../feature-flag/constants";
import { featureFlagReducer } from "../feature-flag";
import { EffectsModule } from "@ngrx/effects";
import { FeatureFlagEffects } from "../feature-flag/effects/feature-flag.effects";

@NgModule({

imports:[

    StoreModule.forFeature(
        STORE_GET_FEATURE_FLAG_NAMESPACE,
        featureFlagReducer
    ),
    EffectsModule.forFeature([
        FeatureFlagEffects
    ])
],
providers:[]
})
export class CoreModule{
    constructor(@Optional() @SkipSelf() parentModule:CoreModule){
        if(parentModule){
            throw new Error(
                'Core Module is already loaded.import it in the app module only'
            );
        }
    }
}