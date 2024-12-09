import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms'; // Correct import
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app.routes';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AppInitService } from './app-init/services/app-init.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,CommonModule,RoutingModule,SharedModule,HeaderModule,HttpClientModule,
    ReactiveFormsModule,BrowserAnimationsModule,ModalModule.forRoot(),StoreModule.forRoot({},
      
    )],
  providers: [], // Add providers here
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private appInitService:AppInitService,
  ){this.appInitService.init();}
}


