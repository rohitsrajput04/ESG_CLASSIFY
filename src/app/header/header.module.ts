import { NgModule } from "@angular/core";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { MainHeaderComponent } from "./main-header/main-header.component";
import { UserChoiceComponent } from "./user-choice/user-choice.component";
import { NavMenuBarComponent } from "../nav-menu-bar/nav-menu-bar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToasterComponent } from "../toaster/toaster/toaster.component";

@NgModule({
    declarations:[
        AppHeaderComponent,
        MainHeaderComponent,
        NavMenuBarComponent,
        UserChoiceComponent,
        ToasterComponent

    ],
    imports:[RouterModule,CommonModule,BrowserModule,BrowserAnimationsModule],
    exports:[AppHeaderComponent,MainHeaderComponent,ToasterComponent],

})
export class HeaderModule{}