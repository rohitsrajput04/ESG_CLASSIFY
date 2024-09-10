import { Component, Input, input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-app-error-modal',
  templateUrl: './app-error-modal.component.html',
  styleUrl: './app-error-modal.component.css'
})
export class AppErrorModalComponent {
@Input() title:string ='';
@Input() message:string='';
constructor(public bsModalRef:BsModalRef){}

hideModal(){
  this.bsModalRef.hide();
}}