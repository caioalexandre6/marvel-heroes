import { Injectable } from "@angular/core";
import {Md5} from 'ts-md5/dist/md5';
import { DataObj } from "../objetos/dataObj";

@Injectable()
export class AppConfig {
  data: DataObj;
  private_key: string;
  public_key: string;
  hash: any;
  ts: string;


  constructor(){
 const md5 = new Md5();
 this.ts = '1';
 this.private_key = '4d77f68594544ee25dab2c8ef8e1ef613d1ab10b';
 this.public_key = 'f2afdf8469b21340ee6757ce38c1f134'


 this.hash = md5.appendStr(this.ts).appendStr(this.private_key).appendStr(this.public_key).end();
 console.log('this.ts', this.ts);

    this.data = {
     base_url: 'https://gateway.marvel.com/v1/public/characters',
     ts: this.ts,
     private_key: this.private_key,
     public_key: this.public_key,
     hash: this.hash
    };
    console.log('HAAASSHH', md5.appendStr(this.data.ts).appendStr(this.data.private_key).appendStr(this.data.public_key).end());



   /*  ts - a timestamp (or other long string which can change on a request-by-request basis)
hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey) */
/*     https://gateway.marvel.com/v1/public/characters?ts=”timestamp (1 até 1000)”&amp;apikey=”api
key pública fornecida pela marvel”&amp;hash=”hash md5 gerado”. */
    /* http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 */
  }
}
