import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  allowed:boolean;
  constructor(public title:Title){
  this.title.setTitle('Eden-ESG Services');
this.allowed=true;
}
}