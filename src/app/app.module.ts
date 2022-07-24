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
import { CharactersObj } from './objetos/charactersObj';
import { CreatorsObj } from './objetos/creatorsObj';
import { EventsObj } from './objetos/eventsObj';
import { SeriesObj } from './objetos/seriesObj';
import { LoadingComponent } from './components/loading/loading.component';
import { ImagensObj } from './objetos/imagensObj';
import { ResponseObj } from './objetos/responseObj';
import { resultObj } from './objetos/resultObj';
import { LocationObj } from './objetos/locationObj';
import { itemsObj } from './objetos/itemsObj';
import { ResponseComicObj } from './objetos/responseComicObj';
import { resultComicObj } from './objetos/resultComicObj';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    LoadingComponent,
    TitleBarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AppConfig,
    DataObj,
    CharactersObj,
    CreatorsObj,
    SeriesObj,
    ResponseObj,
    ResponseComicObj,
    resultObj,
    resultComicObj,
    ImagensObj,
    EventsObj,
    itemsObj,
    LocationObj,
    ServiceMarvel,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
