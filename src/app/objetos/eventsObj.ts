import { CharactersObj } from './charactersObj';
import { ComicsObj } from './comicsObj';
import { CreatorsObj } from './creatorsObj';
import { SeriesObj } from './seriesObj';
import { StoriesObj } from './storiesObj';

export class EventsObj {
  public id: number;
  public title: string;
  public description: string;
  public resourceURI: string;
  public urls: Array<any>;
  public modified: number;
  public start: string;
  public end: string;
  public thumbnail: string;
  public comics: Array<ComicsObj>;
  public stories: Array<StoriesObj>;
  public series: Array<SeriesObj>;
  public characters: Array<CharactersObj>;
  public creators: Array<CreatorsObj>;
  public next: string;
  public previous: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.resourceURI = '';
    this.urls = new Array<any>();
    this.modified = 0;
    this.start = '';
    this.end = '';
    this.thumbnail = '';
    this.comics = new Array<ComicsObj>();
    this.stories = new Array<StoriesObj>();
    this.series = new Array<SeriesObj>();
    this.characters = new Array<CharactersObj>();
    this.creators = new Array<CreatorsObj>();
    this.next = '';
    this.previous = '';
  }
}
