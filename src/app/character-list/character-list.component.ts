import { Component, Injectable, OnInit } from '@angular/core';
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
  public listCharacter: Array<any>;
  public listCharacterAux: Array<any>;
  constructor(private api: ServiceMarvel) {
    this.listCharacter = new Array<any>();
    this.listCharacterAux = new Array<any>();
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

  async id(id: any){
    console.log('CLICOU AI');
    await this.api.getCharacterById(id).then(async (resp: any) => {
      this.listCharacter = resp.data.results;
      this.listCharacterAux = this.listCharacter;
    });
  }

  async ngOnInit(): Promise<void> {
    await this.api.getCharacters().then(async (resp: any) => {
      this.listCharacter = resp.data.results;
      this.listCharacterAux = this.listCharacter;
    });
  }
}
