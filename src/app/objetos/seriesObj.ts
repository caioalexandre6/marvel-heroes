import { CharactersObj } from './charactersObj';
import { CreatorsObj } from './creatorsObj';
import { ComicsObj } from "./comicsObj";
import { EventsObj } from "./eventsObj";
import { StoriesObj } from './storiesObj';

export class SeriesObj{
public id: number;
public title:	string;
public description:	string;
public resourceURI:	string;
public urls:	Array<any>;
public startYear:	number;
public endYear:	number;
public rating:	string;
public modified: string;
public thumbnail:	string;
public comics: Array<ComicsObj>;
public stories: Array<StoriesObj>;
public events: Array<EventsObj>;
public characters: Array<CharactersObj>;
public creators: Array<CreatorsObj>;
public next: string;
public previous: string;

constructor(){
this.id = 0;
this.title =	'';
this.description =	'';
this.resourceURI =	'';
this.urls =	new Array<any>();
this.startYear =	0;
this.endYear =	0;
this.rating =	'';
this.modified = '';
this.thumbnail =	'';
this.comics = new Array<ComicsObj>();
this.stories =  new Array<StoriesObj>();
this.events = new Array<EventsObj>();
this.characters = new Array<CharactersObj>();
this.creators = new Array<CreatorsObj>();
this.next = '';
this.previous = '';
}
}
