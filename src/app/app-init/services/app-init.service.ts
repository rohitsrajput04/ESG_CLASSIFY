import { Injectable } from "@angular/core";
import { AppConfigService } from "./app-config.service";
import { Store } from "@ngrx/store";
import { Apollo } from "apollo-angular";
import { BsModalService } from "ngx-bootstrap/modal";
import { AppConfig, StoreAppConfig } from "../../store/models/app-config.model";
import { WebSsoAuthActions } from "../../store/authenticate/actions/authenticate.actions";
import { Observable, catchError, tap } from "rxjs";
import { AppConfigActions } from "../../store/actions";


@Injectable({ providedIn: 'root' })
export class AppInitService {
    constructor(
        private appConfigService: AppConfigService,
        private modalService: BsModalService,
        private store: Store<StoreAppConfig>,
        private apollo: Apollo,
        private httpLink: HttpLink
    ) { }

    async init() {
        // Get initial config
        const appConfig: AppConfig = await this.getAppConfig().toPromise();
        // Set up GraphQL for ESG namespace
        this.setGraphql(appConfig.graphqlAPIUrl);
        // Get user details
        this.getUser();
    }

    // Setup GraphQL endpoint
    public setGraphql(graphqlUrl: string, projectNamespace = 'GRAPHQL_NAMESPACE_ESG'): void {
        if (!this.apollo.use(projectNamespace)) {
            this.apollo.createNamed(projectNamespace, {
                cache: new InMemoryCache(),
                link: this.httpLink.create({
                    uri: graphqlUrl,
                })
            });
        }
    }

    // Fetch username from API
    public getUser() {
        this.store.dispatch(WebSsoAuthActions.getWebSsoUserRequest());
    }

    resolve(): Promise<any> {
        return this.init();
    }

    // Return an app config or display a dialog with an error message
    public getAppConfig(): Observable<AppConfig> {
        return this.appConfigService.getConfig().pipe(
            tap((appConfig: AppConfig) => {
                // Dispatch success action to store
                this.store.dispatch(AppConfigActions.getAppConfigSuccess({ payload: appConfig }));
            }),
            catchError((error: Error) => {
                // Display an error modal if config fetch fails
                const initialState = { title: 'Error', message: 'Failed to fetch app config' };
                this.modalService.show(initialState);  // Assuming the modal service can display the error message this way.
                throw error; // Re-throw the error after showing the modal
            })
        );
    }
}
