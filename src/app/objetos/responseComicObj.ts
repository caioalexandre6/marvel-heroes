import { resultComicObj } from "./resultComicObj";

export class ResponseComicObj {
  public attributionHTML: string;
  public attributionText: string;
  public code: number;
  public copyright: string;
  public data: resultComicObj;
  public etag: string;
  public status: string;

  constructor() {
    this.attributionHTML = '';
    this.attributionText = '';
    this.code = 0;
    this.copyright = '';
    this.data = new resultComicObj();
    this.etag = '';
    this.status = '';
  }
}
