import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AnimauxService } from './services/animaux.service';
import { ServicesComponent } from './components/services/services.component';
import { ProduitsService } from './services/produits.service';
import { RoutingComponent } from './components/routing/routing.component';
import { ErrorComponent } from './components/error/error.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { ModifierComponent } from './components/modifier/modifier.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ProductAddFormComponent } from './components/product-add-form/product-add-form.component';
import { ProductModifierFormComponent } from './components/product-modifier-form/product-modifier-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DirectivesComponent,
    ProductListComponent,
    PipesComponent,
    ServicesComponent,
    RoutingComponent,
    ErrorComponent,
    AjouterComponent,
    ModifierComponent,
    NavbarComponent,
    ProductCardComponent,
    FormulaireComponent,
    ProductAddFormComponent,
    ProductModifierFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AnimauxService,ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
