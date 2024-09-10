import { Injectable } from "@angular/core";
import { User } from "../../store/authenticate/models/authenticate.models";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { pluck, switchMap } from "rxjs/operators";

import { AppConfigService } from "./app-config.service";

@Injectable({
    providedIn: 'root'
})
export class WebSsoUserApiService {
    public static SSO_USER_API_PATH = '/user';
    private webSsoUser?: User;

    constructor(
        private httpClient: HttpClient,
        private appConfigService: AppConfigService,
    ) { }
    public getWebSsoUser(): Observable<User> {
        if (this.webSsoUser) {
            return of(this.webSsoUser);
        }
        const apiBaseUrl$ = this.appConfigService.getConfig()?.pipe(
            pluck('baseAPIUrl'),);

        return apiBaseUrl$.pipe(
            switchMap((apiBaseUrl: string) => {
                return this.fetchWebSsoUser(

                    apiBaseUrl + WebSsoUserApiService.SSO_USER_API_PATH
                );
            }),
        );
    }
    private fetchWebSsoUser(url: string): Observable<User> {
        return this.httpClient.get<User>(url);
    }
}