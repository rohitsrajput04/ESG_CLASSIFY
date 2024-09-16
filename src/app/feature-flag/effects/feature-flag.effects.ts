import { Injectable } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { FeatureAccessFlagService } from "../../../../shared/feature-access-flag.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetFeatureFlagFailure, GetFeatureFlagRequest, GetFeatureFlagSuccess } from "../feature-flag.component";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { AppErrorModalComponent } from "../../../../shared/app-error-modal/app-error-modal/app-error-modal.component";

@Injectable()
export class FeatureFlagEffects {

    constructor(private actions$: Actions,
        private modalService: BsModalService,
        private featureFlagService: FeatureAccessFlagService
    ) { }
    getFeatureFlagRequest$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(GetFeatureFlagRequest),
            switchMap(() =>
                this.featureFlagService.getFeatureFlag().pipe(
                    map(data => GetFeatureFlagSuccess({ payload: data })),
                    catchError((error: Error) => {
                        const initialState = {
                            title: 'Error',
                            message: 'Fail to fetch feature flag data'
                        };
                        this.modalService.show(AppErrorModalComponent, { initialState });
                        return of(GetFeatureFlagFailure({ error: error }));
                    })

                )
            )
        )
    );
}