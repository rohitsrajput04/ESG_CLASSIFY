import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms'; // Correct import

@NgModule({
  declarations: [AppComponent],
  imports: [ReactiveFormsModule,BrowserAnimationsModule, CommonModule,HeaderModule,HttpClient,ModalModule],
  providers: [], // Add providers here
  bootstrap: [AppComponent]
})
export class AppModule { }
