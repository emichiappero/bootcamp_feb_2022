import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importamos un módulo para manejar peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './componentes/mi-componente/mi-componente.component';

@NgModule({
  declarations: [AppComponent, MiComponenteComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
