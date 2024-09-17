import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer/footer.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BsModalRef, BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { ReactiveFormsModule } from '@angular/forms'; // Correct import
import { FormsModule } from '@angular/forms';
import{TabsModule} from 'ngx-bootstrap/tabs';
@NgModule({

    declarations:[
        FooterComponent,
        
    ],
    imports:[
        CommonModule,
        RouterModule,
       // NavBarModule,
        TabsModule,
        ReactiveFormsModule,
        FormsModule,
        ModalModule.forRoot(),
    ],
    exports:[FooterComponent],
    providers:[BsModalService,BsModalRef],
})
export class SharedModule{}