import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { GuardarprodComponent } from './guardarprod/guardarprod.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';

const routes: Routes = [
  {path:'', children:[
    {path:'Galeria', component: GaleriaComponent},
    {path:'Prod/:id', component: Prod1Component},
    {path:'Prod2', component: Prod2Component},
    {path:'Guardarprod', component: GuardarprodComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdRoutingModule { }
