import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class GraphQlService{
    constructor(private apollo:Apollo){

    }
    runQuery(namespace:string,query:any,variables:any=null):Observable<any>{
        const fetchPolicy='no-cache';
        return this.apollo.use(namespace).query({fetchPolicy,query,variables});

    }
    runMutation(namespace:string,mutation:any,variables:any):Observable<any>{
        const fetchPolicy='no-cache';
        return this.apollo.use(namespace).mutate({fetchPolicy,mutation,variables});
    }
}