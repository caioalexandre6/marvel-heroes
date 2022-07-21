
export class DataObj {
  public base_url: string;
  public ts: string;
  public private_key: string;
  public public_key: string;
  public hash: any;

  constructor(){
    this.base_url = '';
    this.ts = '';
    this.private_key = '';
    this.public_key = '';
    this.hash = 0;
  }
}
