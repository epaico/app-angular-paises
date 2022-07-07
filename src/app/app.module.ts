import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from "./app.routes";
import { NavarComponent } from './components/navar/navar.component';
import {HttpClientModule} from "@angular/common/http";
import { CardPaisComponent } from './components/card-pais/card-pais.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavarComponent,
    CardPaisComponent,
    PaisDetalleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
