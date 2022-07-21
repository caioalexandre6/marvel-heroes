import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FormsModule } from '@angular/forms';
import { AppConfig } from './config/app.config';
import { DataObj } from './objetos/dataObj';
import { HttpClientModule } from '@angular/common/http';
import { ServiceMarvel } from './services/serviceMarvel';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppConfig, DataObj, ServiceMarvel],
  bootstrap: [AppComponent]
})
export class AppModule { }
