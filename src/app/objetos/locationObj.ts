import { CharactersObj } from "./charactersObj"

export class LocationObj{
public characters: Array<CharactersObj>;
public navigationId: number;
public personage: CharactersObj;

constructor(){
  this.characters = new Array<CharactersObj>();
  this.navigationId = 0;
  this.personage = new CharactersObj();
}
}
