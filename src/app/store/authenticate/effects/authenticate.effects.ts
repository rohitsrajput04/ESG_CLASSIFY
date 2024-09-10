import { Injectable } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { WebSsoUserApiService } from "../../../app-init/services/web-sso-user-api.service";
import{Actions, createEffect, ofType} from "@ngrx/effects";
import { Observable, catchError, map, of, switchMap } from "rxjs";
import { getWebSsoUserFailure, getWebSsoUserRequest, getWebSsoUserSuccess } from "../actions/authenticate.actions";

@Injectable()
export class AuthWebSsoUserEffects{
    constructor(
        private actions$:Actions,
        private modalService:BsModalService,
        private webSsoApiService:WebSsoUserApiService,
    ){}
    authWebSsoUserRequest$:Observable<any> = createEffect(() =>
        this.actions$.pipe(ofType(getWebSsoUserRequest),switchMap(()=>
            this.webSsoApiService.getWebSsoUser().pipe(map(data=> getWebSsoUserSuccess({payload:data})),
    catchError((error:Error)=>{

        const intialState={title:'Error',
            message:'Failed to fetch user details'
        };
        this.modalService.show(AppErrorModalComponent,{initialState});
        return of(getWebSsoUserFailure({error:error}));

        
    })
        
        )
    )
)
    );
}
