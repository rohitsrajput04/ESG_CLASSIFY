import { RouterModule, Routes } from '@angular/router';
import { ESG_ROUTES } from './routing.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [

    {
        path:'',
        pathMatch:'full',
        redirectTo:ESG_ROUTES.ESG_HOME
    },
    {
        path:'**',
        redirectTo:ESG_ROUTES.ESG_HOME
    }
];
@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forRoot(routes,{
            onSameUrlNavigation:'reload',
            anchorScrolling:'enabled'
        }),
        SharedModule
    ],
    exports:[RouterModule]
})
export class RoutingModule{}