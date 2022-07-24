import { CharactersObj } from "./charactersObj";
import { ComicsObj } from "./comicsObj";
import { CreatorsObj } from "./creatorsObj";
import { EventsObj } from "./eventsObj";
import { SeriesObj } from "./seriesObj";

export class StoriesObj {
public id: number;
public title:	string;
public description:	string;
public resourceURI:	string;
public type:	string;
public modified:	Number;
public thumbnail:	String;
public comics: Array<ComicsObj>;
public series: Array<SeriesObj>;
public events: Array<EventsObj>;
public characters: Array<CharactersObj>;
public creators: Array<CreatorsObj>;
public originalissue: string;

constructor(){
this.id = 0;
this.title =	'';
this.description =	'';
this.resourceURI =	'';
this.type =	'';
this.modified =	0;
this.thumbnail =	'';
this.comics = new Array<ComicsObj>();
this.series = new Array<SeriesObj>();
this.events = new Array<EventsObj>();
this.characters = new Array<CharactersObj>();
this.creators = new Array<CreatorsObj>();
this.originalissue = '';
}
}
