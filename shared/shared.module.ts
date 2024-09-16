import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({

    declarations:[
        FooterComponent,
        
    ],
    imports:[
        CommonModule,
        RouterModule,
        NavBarMoModule,
        TabsModule,
        ReactiveFormsModule,
        FormsModule

    ]
})