import { resultObj } from "./resultObj";

export class ResponseObj {
  public attributionHTML: string;
  public attributionText: string;
  public code: number;
  public copyright: string;
  public data: resultObj;
  public etag: string;
  public status: string;

  constructor() {
    this.attributionHTML = '';
    this.attributionText = '';
    this.code = 0;
    this.copyright = '';
    this.data = new resultObj();
    this.etag = '';
    this.status = '';
  }
}
