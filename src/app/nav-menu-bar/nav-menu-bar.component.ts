import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EPC_NAV_MENU_NAME, EPC_ROLE, FEATURE_FLAT_MAPPING, NavMenuList } from '../constants/nav-menu.constants';
import { User } from '../store/authenticate/models/authenticate.models';
import { FeatureAccessFlag } from '../../../shared/models/feature-access-flag';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { subscribe } from 'diagnostics_channel';
import { WebSsoAuthSelectors } from '../store/authenticate/selectors/authenticate.selectors';
import { FeatureFlagSelectors } from '../feature-flag';
import { FeatureFlagActions } from '../feature-flag/actions';

@Component({
    selector: 'app-nav-menu-bar',
    imports: [],
    templateUrl: './nav-menu-bar.component.html',
    styleUrl: './nav-menu-bar.component.css'
})
export class NavMenuBarComponent implements OnInit {
  navMenu = NavMenuList;
  userObject: User | null = null;
  getFeatureAccessFlagData$!: Observable<FeatureAccessFlag[]>;
  subscription: Subscription[];
  clearSavedResponse: any;
  constructor(
    private route: Router,
    private store: Store<any>,
    private cdr: ChangeDetectorRef) {
    this.subscription = [];
    this.clearSavedResponse = {};
  }
  ngOnInit(): void {
    this.store
      .pipe(select(WebSsoAuthSelectors.getWebSsoUser))
      .subscribe((userObject: User | null) => {
        this.userObject = userObject;
        this.checkForEPCRole();
        setTimeout(() => {
          this.getFeatureFlagData();
        }, 500);
      });
  }
  //rohit
  showNavigationTabs(allowed_roles: string[]) {

    let disabled = true;
    for (let role of allowed_roles) {
      if (this.userObject && this.userObject.roles?.indexOf(role) > -1) {
        disabled = false;
        break;
      }
    }
    return disabled;
  }
  //
  checkForEPCRole() {
    if (this.userObject) {
      var isEPCRoleExists = this.userObject.roles?.some(x => x === EPC_ROLE);
      if (!isEPCRoleExists) {
        this.navMenu = NavMenuList.filter(
          x => x.menu_name !== EPC_NAV_MENU_NAME
        );
      }
    }
    //
  }
  getFeatureFlagData(): void {
    this.store.dispatch(FeatureFlagActions.GetFeatureFlagRequest());
    this.getFeatureAccessFlagData$ = this.store.pipe(
      select(FeatureFlagSelectors.getFeatureFlag)

    );
    const currentSubscription = this.getFeatureAccessFlagData$.subscribe(
      (featureFlagData: FeatureAccessFlag[]) => {
        if (featureFlagData != undefined && Object.keys(featureFlagData).length != 0) {
          featureFlagData.forEach(item => {
            if (!item.value) {
              let menuName = FEATURE_FLAT_MAPPING.find(
                x => x.flag === item.flag

              )?.menu_name;
              this.navMenu = NavMenuList.filter(x => x.menu_name !== menuName);
              this.cdr.detectChanges();
            }
          });
        }
      }
    );
    this.subscription.push(currentSubscription);
  }
  returnToHome() {
    this.clearSavedResponse = { clearSavedResponse: true };
    this.route.navigate(['/home']);
  }
  ngOnDestroy() {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }
}