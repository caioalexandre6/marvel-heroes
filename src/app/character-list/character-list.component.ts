import { Component, Injectable, OnInit } from '@angular/core';
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
  public loading: boolean;
  public loadBanner: boolean;
  public listByGrid: boolean;
  public listCharacter: Array<CharactersObj>;
  public listCharacterAux: Array<CharactersObj>;

  constructor(private api: ServiceMarvel, private router: Router) {
    this.listByGrid = false;
    this.loading = false;
    this.loadBanner = false;
    this.listCharacter = new Array<CharactersObj>();
    this.listCharacterAux = new Array<CharactersObj>();
  }

  pesquisar() {
    this.listCharacterAux = this.filterItems(this.searchInput);
    console.log('disparou', this.listCharacterAux);
  }

  filterItems(searchInput: any) {
    return this.listCharacter.filter((obj) => {
      var conteudo = obj.name;
      console.log('codd', conteudo);
      return conteudo.toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
    });
  }

  listBy() {
    if (this.listByGrid === false) {
      this.listByGrid = true;
    } else {
      this.listByGrid = false;
    }
  }

  navigateByRoute(character: CharactersObj) {
    this.router.navigate(['/character-details'], {
      state: { personage: character, characters: this.listCharacter },
    });
  }

  async ngOnInit() {
    this.loading = true;
    await this.api.getCharacters().then(async (resp: ResponseObj) => {
      console.log('obj', resp);
      if(resp.code === 200){
        this.listCharacter = resp.data.results;
        this.listCharacterAux = this.listCharacter;
        this.loading = false;
      } else{
        this.loading = false;
      }
    });
    console.log('console', this.listCharacterAux)
  }
}
