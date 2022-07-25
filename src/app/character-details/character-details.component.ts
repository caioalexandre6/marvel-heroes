import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CharactersObj } from '../objetos/charactersObj';
import { LocationObj } from '../objetos/locationObj';
import { ServiceMarvel } from '../services/serviceMarvel';
import { ResponseObj } from '../objetos/responseObj';
import { ComicsObj } from '../objetos/comicsObj';
import { ResponseComicObj } from '../objetos/responseComicObj';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  public character: CharactersObj;
  public loc: any;
  public btnLoad: boolean;
  public titleComic: string;
  public AllCharacters: Array<CharactersObj>;
  public listComic: Array<ComicsObj>;
  public listComicAux: Array<ComicsObj>;

  constructor(private api: ServiceMarvel ,private router: Router, private location: Location) {
    this.titleComic = "COMICS"
    this.btnLoad = true;
    this.character = new CharactersObj();
    this.AllCharacters = new Array<CharactersObj>();
    this.listComic = new Array<ComicsObj>();
    this.listComicAux = new Array<ComicsObj>();
  }

  async loadMore(){
    this.btnLoad = false;
    await this.api.getComicsById(this.character.id, 4, this.listComicAux.length).then(async (resp: ResponseComicObj) => {
      console.log('obj', resp);
      if(resp.code === 200){
        if(resp.data.results.length !== 0){
          for (const newComics of resp.data.results) {
            this.listComic.push(newComics);
          }
          this.listComicAux = this.listComic;
          this.btnLoad = true;
        } else{
          this.btnLoad = false;
        }
       /*  this.loading = false; */
      } else{
      /*   this.loading = false; */
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.loc = this.location.getState();
    this.AllCharacters = this.loc.characters;
    this.character = this.loc.personage;

    await this.api.getComicsById(this.character.id, 4, 0).then(async (resp: ResponseComicObj) => {
      console.log('obj', resp);
      if(resp.code === 200){
        this.listComic = resp.data.results;
        this.listComicAux = this.listComic;
       /*  this.loading = false; */
      } else{
      /*   this.loading = false; */
      }
    });
    console.log('console', this.listComicAux)
  }
}
