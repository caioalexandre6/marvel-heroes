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
  public searchInput: any;
  public titleComic: string;
  public AllCharacters: Array<CharactersObj>;
  public listComic: Array<ComicsObj>;
  public listComicAux: Array<ComicsObj>;

  constructor(
    private api: ServiceMarvel,
    private router: Router,
    private location: Location
  ) {
    this.titleComic = 'COMICS';
    this.btnLoad = true;
    this.character = new CharactersObj();
    this.AllCharacters = new Array<CharactersObj>();
    this.listComic = new Array<ComicsObj>();
    this.listComicAux = new Array<ComicsObj>();
  }

  /*  Filtro para pesquisar personagens na Array */
  pesquisar() {
    this.listComicAux = this.filterItems(this.searchInput);
  }

  /*  Filtrar itens já carregado na Array */
  filterItems(searchInput: any) {
    return this.listComic.filter((obj) => {
      var conteudo = obj.title;
      return conteudo.toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
    });
  }

  /* Carregar mais comics por ID e por limite sem carregar os que já existem */
  async loadMore() {
    this.btnLoad = false;
    await this.api
      .getComicsById(this.character.id, 4, this.listComicAux.length)
      .then(async (resp: ResponseComicObj) => {
        if (resp.code === 200) {
          if (resp.data.results.length !== 0) {
            for (const newComics of resp.data.results) {
              this.listComic.push(newComics);
            }
            this.listComicAux = this.listComic;
            this.btnLoad = true;
          } else {
            this.btnLoad = false;
          }
          /*  this.loading = false; */
        } else {
          /*   this.loading = false; */
        }
      });
  }

  /* Ao entrar na tela carregar 4 primeiros comics */
  async ngOnInit(): Promise<void> {
    this.loc = this.location.getState();
    this.AllCharacters = this.loc.characters;
    this.character = this.loc.personage;
    if (this.character === undefined) {
      this.router.navigate(['/character-list']);
    } else {
      await this.api
        .getComicsById(this.character.id, 4, 0)
        .then(async (resp: ResponseComicObj) => {
          if (resp.code === 200) {
            this.listComic = resp.data.results;
            this.listComicAux = this.listComic;
            /*  this.loading = false; */
          } else {
            /*   this.loading = false; */
          }
        });
    }
  }
}
