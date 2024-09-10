import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AppConfig } from "../../store/models/app-config.model";

@Injectable({ providedIn: 'root' })
export class AppConfigService {
    public static CONFIG_URL = 'assets/app.config.json';
    private appConfig?: AppConfig;

    constructor(private httpClient: HttpClient) { }
    public getConfig(): Observable<AppConfig> {
        if (this.appConfig) {
            return of(this.appConfig);
        }

        //prevent multiple bootstrap when app is being bootstraped
        return this.fetchConfig();
    }
    //fetches app configm from local filesystem
    private fetchConfig(): Observable<AppConfig> {
        return this.httpClient.get<AppConfig>(AppConfigService.CONFIG_URL);
    }
}