import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, StoreAuth } from '../../store/authenticate/models/authenticate.models';
import { WebSsoAuthSelectors } from '../../store/authenticate/selectors/authenticate.selectors';

@Component({
  selector: 'app-user-choice',
  standalone: true,
  imports: [],
  templateUrl: './user-choice.component.html',
  styleUrl: './user-choice.component.css'
})
export class UserChoiceComponent implements OnInit{
  lastLoginTime:Date;
  userObject$!:Observable <User | null>;

constructor(private store:Store<StoreAuth>){
  const timeZoneOffset=new Date().getTimezoneOffset();
  const timeZoneOffsetInMS=timeZoneOffset*60*1000;
  this.lastLoginTime=new Date(new Date().getTime()-timeZoneOffsetInMS);
}
  ngOnInit(): void {
this.userObject$=this.store.pipe(select(WebSsoAuthSelectors.getWebSsoUser));
  }
}
