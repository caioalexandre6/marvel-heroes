import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public listByGrid: boolean;
  public listCharacter: Array<any>;
  public listCharacterAux: Array<any>;

  constructor(private api: ServiceMarvel, private router: Router) {
    this.listCharacter = new Array<any>();
    this.listCharacterAux = new Array<any>();
    this.listByGrid = false;
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

  async id(id: any) {
    console.log('CLICOU AI');
    await this.api.getCharacterById(id).then(async (resp: any) => {
      this.listCharacter = resp.data.results;
      this.listCharacterAux = this.listCharacter;
    });
  }

  listBy() {
    if (this.listByGrid === false) {
      this.listByGrid = true;
    } else {
      this.listByGrid = false;
    }
  }

  navigateByRoute(character: any){
    this.router.navigate(['/character-details'], character);
  }

  async ngOnInit() {
    await this.api.getCharacters().then(async (resp: any) => {
      this.listCharacter = resp.data.results;
      this.listCharacterAux = this.listCharacter;
      console.log('list', this.listCharacter);
    });
  }
}
