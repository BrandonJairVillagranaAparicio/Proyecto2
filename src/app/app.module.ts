import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './prod/galeria/galeria.component';
import { NavbarComponent } from './prod/navbar/navbar.component';
import { Prod1Component } from './prod/prod1/prod1.component';
import { Prod2Component } from './prod/prod2/prod2.component';


@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    NavbarComponent,
    Prod1Component,
    Prod2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
