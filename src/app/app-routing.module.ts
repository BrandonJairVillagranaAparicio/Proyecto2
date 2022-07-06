import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './prod/galeria/galeria.component';
import { GuardarprodComponent } from './prod/guardarprod/guardarprod.component';
import { ProdModule } from './prod/prod.module';

const routes: Routes = [
  {path: 'Galeria', component: GaleriaComponent},
  {path: 'Galeria', loadChildren:()=>import('./prod/prod.module').then(m=>m.ProdModule)},
  {path: 'Guardarprod', component: GuardarprodComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
