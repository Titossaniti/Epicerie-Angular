import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { ErrorComponent } from './components/error/error.component';
import { ModifierComponent } from './components/modifier/modifier.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'ajouter', component: AjouterComponent},
  {path: 'produits/:numero', component: ModifierComponent},
  {path:'produits', component: ProductListComponent},
  {path:'',redirectTo: 'produits', pathMatch:'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }