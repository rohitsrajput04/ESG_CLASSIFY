import { Injectable } from "@angular/core";
import { AppConfigService } from "./app-config.service";
import { Store } from "@ngrx/store";
import { Apollo } from "apollo-angular";
import { BsModalService } from "ngx-bootstrap/modal";


import { AppConfig, StoreAppConfig } from "../../store/models/app-config.model";
import { HttpLink, InMemoryCache } from "@apollo/client/core";
import { link } from "fs";
import { WebSsoAuthActions } from "../../store/authenticate/actions/authenticate.actions";
import { Observable, catchError, tap } from "rxjs";
import { appConfig } from "../../app.config";
import { resolve } from "dns";

@Injectable({ providedIn: 'root' })
export class AppInitService{

    defer:Promise<any> | null;
    constructor(
        private appConfigService:AppConfigService,
        private modalService:BsModalService,
        private store:Store<StoreAppConfig>,
        private apollo:Apollo,
        private httpLink:HttpLink
    ){
        this.defer=null;
    }
    init(){
        if(!this.defer)
            this.defer=new Promise<void>(async(resolve)=>{
        //get initial config
        const appConfig:AppConfig=await this.getAppConfig().toPromise();
//graphql for ESG namespace
        this.setGraphql(appConfig.graphqlAPIUrl);
        //get user
        this.getUser();
        resolve();
            
    });
    }
   
return this.defer;

}
//setup graphql endpoint
public setGraphql(graphqlUrl:string,projectNamespace='GRAPHQL_NAMESPACE_ESG'):void{
    if(!this.apollo.use(projectNamespace)){
this.apollo.createNamed(projectNamespace,{
    cache:new InMemoryCache({
        addTypename:false
    }),
    link:this.httpLink.create({
        uri:graphqlUrl,
    })
});
    }
}
//to fetch username from api
public getUser(){
    this.store.dispatch(WebSsoAuthActions.getWebSsoUserRequest());
}
resolve():Promise<any>{
    return this.init();
}



//return an app config or display a dialog with an err msg

public getAppConfig():Observable<AppConfig>{
    return this.appConfigService.getConfig()
    .pipe(
        tap(
            (appConfig:AppConfig)=>this.store.dispatch(AppConfigActions.getAppConfigSuccess({payload:appConfig}))),
            catchError((error:Error)=>{
                const initialState ={title:'Error',message:'Failed to fetch app config'};
                this.modalService.show(AppConfigActions)
            })
        )
    )
}

}