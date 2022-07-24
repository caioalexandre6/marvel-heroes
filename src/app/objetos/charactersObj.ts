import { SeriesObj } from './seriesObj';
import { ComicsObj } from './comicsObj';
import { EventsObj } from './eventsObj';
import { StoriesObj } from './storiesObj';
import { ImagensObj } from './imagensObj';

export class CharactersObj {
  public id: number;
  public name: string;
  public description: string;
  public modified: number;
  public resourceURI: string;
  public urls: Array<any>;
  public thumbnail: ImagensObj;
  public comics: ComicsObj;
  public stories: Array<StoriesObj>;
  public events: Array<EventsObj>;
  public series: Array<SeriesObj>;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.modified = 0;
    this.resourceURI = '';
    this.urls = new Array<any>();
    this.thumbnail = new ImagensObj();
    this.comics = new ComicsObj();
    this.stories = new Array<StoriesObj>();
    this.events = new Array<EventsObj>();
    this.series = new Array<SeriesObj>();
  }
}
