import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdRoutingModule } from './prod-routing.module';
import { Prod3Component } from './prod3/prod3.component';
import { GuardarprodComponent } from './guardarprod/guardarprod.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    Prod3Component,
       GuardarprodComponent
  ],
  imports: [
    CommonModule,
    ProdRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdModule { }
