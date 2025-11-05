import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import {PrimerComponent} from './primercomponent/primer.component';
import {HooksAngular} from './hooksangular/hooksangular.component';
import {DeportesComponent} from './deportes/deportes.component';
import { Deportes2Component } from './deportes2/deportes2.component';
import  {FormsModule} from '@angular/forms';
import { FormularioBindingComponent } from './formulariobinding/formulario.component';
import { SumarnumerosComponent } from './sumarnumeros/sumarnumeros.component';
import { Prueba } from './components/prueba/prueba';
import { Prueba2Component } from './components/prueba2.component/prueba2.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    Deportes2Component,
    FormularioBindingComponent,
    SumarnumerosComponent,
    Prueba,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
