import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  Injectable,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { CharactersObj } from '../objetos/charactersObj';
import { ResponseObj } from '../objetos/responseObj';
import { ServiceMarvel } from '../services/serviceMarvel';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class CharacterListComponent implements OnInit {
  public searchInput: any;
  public btnLoad: boolean;
  public loading: boolean;
  public loadBanner: boolean;
  public listByGrid: boolean;
  public listCharacter: Array<CharactersObj>;
  public listCharacterAux: Array<CharactersObj>;

  constructor(
    private api: ServiceMarvel,
    private router: Router,
    private scroller: ViewportScroller
  ) {
    this.listByGrid = false;
    this.loading = false;
    this.btnLoad = true;
    this.loadBanner = false;
    this.listCharacter = new Array<CharactersObj>();
    this.listCharacterAux = new Array<CharactersObj>();
  }

  /*  Filtro para pesquisar personagens na Array */
  pesquisar() {
    this.listCharacterAux = this.filterItems(this.searchInput);
  }

  /*  Filtrar itens já carregado na Array */
  filterItems(searchInput: any) {
    return this.listCharacter.filter((obj) => {
      var conteudo = obj.name;
      return conteudo.toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
    });
  }

  /*   Scroll para determinada div na tela */
  scrollToFocus(focusName: string): void {
    this.scroller.scrollToAnchor(focusName);
  }

  /*  mudar de list para grid e vice versa */
  listBy() {
    if (this.listByGrid === false) {
      this.listByGrid = true;
    } else {
      this.listByGrid = false;
    }
  }

  /* navegar por rota */
  navigateByRoute(character: CharactersObj) {
    this.router.navigate(['/character-details'], {
      state: { personage: character, characters: this.listCharacter },
    });
  }

  /*  Pesquisar na API por comeco de nome */
  async getCharactersByName(searchInput: any) {
    if (searchInput !== undefined && searchInput !== '') {
      await this.api
        .getCharactersByName(searchInput, 16, 0)
        .then(async (resp: ResponseObj) => {
          if (resp.code === 200) {
            this.listCharacter = resp.data.results;
            this.listCharacterAux = this.listCharacter;
            this.btnLoad = true;
            this.scrollToFocus('focusSearch');
            this.btnLoad = true;
          } else {
            this.loading = false;
          }
        });
    } else {
      this.scrollToFocus('focusSearch');
    }
  }

  /*  carregar mais personagens e não carregar os que já existem em tela */
  async loadMore() {
    this.btnLoad = false;
    await this.api
      .getCharacters(4, this.listCharacterAux.length)
      .then(async (resp: ResponseObj) => {
        if (resp.code === 200) {
          if (resp.data.results.length !== 0) {
            for (const newCharacter of resp.data.results) {
              this.listCharacter.push(newCharacter);
            }
            this.listCharacterAux = this.listCharacter;
            this.btnLoad = true;
          } else {
            this.btnLoad = false;
          }
        } else {
          this.btnLoad = false;
        }
      });
  }

  /* Requisição ao entrar na tela para obter 4 primeiros personagens */
  async ngOnInit() {
    this.loading = true;
    await this.api.getCharacters(4, 0).then(async (resp: ResponseObj) => {
      if (resp.code === 200) {
        this.listCharacter = resp.data.results;
        this.listCharacterAux = this.listCharacter;
        this.loading = false;
      } else {
        this.loading = false;
      }
    });
  }
}
