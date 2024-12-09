import { Component } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToasterModel } from '../../store/models/core.model';
import { Coreselectors } from '../../store/selectors/selectors';
import { CoreActions } from '../../store/actions/core.actions';

@Component({
    selector: 'app-main-header',
    imports: [],
    templateUrl: './main-header.component.html',
    styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  db_url = "https://www.javapoint.com"//DB_URL_LINK;
  showToasterMessage$: Observable<ToasterModel>;
  constructor(private store: Store<ToasterModel>){
  this.showToasterMessage$= this.store.pipe(
  select(Coreselectors.getToasterMessageRequest)
  );
}
onClosingToaster(): void {
  this.store.dispatch(
  new CoreActions.SetToasterMessageRequest({ message: '',type:''})
  );
}
}
