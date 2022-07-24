import { CharactersObj } from './charactersObj';
import { ComicsObj } from './comicsObj';

export class resultObj {
  public count: number;
  public limit: number;
  public offset: number;
  public results: Array<CharactersObj>;
  public total: number;

  constructor() {
    this.count = 0;
    this.limit = 0;
    this.offset = 0;
    this.results = new Array<CharactersObj>();
    this.total = 0;
  }
}
