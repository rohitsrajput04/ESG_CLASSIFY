import { Injectable } from "@angular/core";
import { GraphQlService } from "../core/api/graphql/graphql.service";
import { catchError, map, Observable, switchMap, throwError } from "rxjs";
import { createEffect, ofType } from "@ngrx/effects";
import { BsModalService } from "ngx-bootstrap/modal";
import { Store } from "@ngrx/store";
import { StoreFeatureFlag } from "../src/app/feature-flag/models/feature-flag.model";
import { GetFeatureFlags } from "../core/api/graphql/queries/feature-access-flags/feature-access-flags.query";
import { FeatureFlagActions } from "../src/app/feature-flag";
import { AppErrorModalComponent } from "./app-error-modal/app-error-modal/app-error-modal.component";
import { FeatureAccessFlag } from "./models/feature-access-flag";

@Injectable({
    providedIn:'root'
})
export class FeatureAccessFlagService{
    constructor(private graphQlService:GraphQlService,private modalService:BsModalService,private store:Store<StoreFeatureFlag>){}
    public getFeatureFlag(){
        return this.graphQlService.runQuery('ESG',GetFeatureFlags).pipe(
            map(
                ({
                    data
                }:{
                    data:{getFeatureFlags:FeatureAccessFlag[] };

                }):FeatureAccessFlag[] => data.getFeatureFlags
            ),tap((featureFlags:FeatureAccessFlag[])=>
            this.store.dispatch(
                FeatureFlagActions.GetFeatureFlagSuccess({
                    payload:featureFlags
                })
            )
            
            ),catchError((error:Error)=>{
                const initialState ={
                    title:'Error',
                    message:'Failed to fetch feature flag data'

                };
                this.modalService.show(AppErrorModalComponent,{initialState});
                this.store.dispatch(FeatureFlagActions.GetFeatureFlagFailure({error})
            );
            return throwError(error);

            })
        );
    }

}