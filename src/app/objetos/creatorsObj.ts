import { StoriesObj } from './storiesObj';
import { SeriesObj } from './seriesObj';
import { ComicsObj } from './comicsObj';
import { EventsObj } from './eventsObj';
export class CreatorsObj {
  public id: number;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public suffix: string;
  public fullName: string;
  public modified: number;
  public resourceURI: string;
  public urls: Array<any>;
  public thumbnail: string;
  public series: Array<SeriesObj>;
  public stories: Array<StoriesObj>;
  public comics: Array<ComicsObj>;
  public events: Array<EventsObj>;

  constructor() {
    this.id = 0;
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';
    this.suffix = '';
    this.fullName = '';
    this.modified = 0;
    this.resourceURI = '';
    this.urls = new Array<any>();
    this.thumbnail = '';
    this.series = new Array<SeriesObj>();
    this.stories = new Array<StoriesObj>();
    this.comics = new Array<ComicsObj>();
    this.events = new Array<EventsObj>();
  }
}
