import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear:number;
  esgPrivacyUrl:string;

  constructor(){
    this.currentYear=new Date().getFullYear();
    this.esgPrivacyUrl='/${esg-privacy-statement}'
  }

}
