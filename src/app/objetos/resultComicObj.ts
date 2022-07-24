import { CharactersObj } from './charactersObj';
import { ComicsObj } from './comicsObj';

export class resultComicObj {
  public count: number;
  public limit: number;
  public offset: number;
  public results: Array<ComicsObj>;
  public total: number;

  constructor() {
    this.count = 0;
    this.limit = 0;
    this.offset = 0;
    this.results = new Array<ComicsObj>();
    this.total = 0;
  }
}
