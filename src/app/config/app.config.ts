import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { DataObj } from '../objetos/dataObj';

@Injectable()
export class AppConfig {
  data: DataObj;
  private_key: string;
  public_key: string;
  hash: any;
  ts: string;

  constructor() {
    /*  Chave publica e privada para o uso da APi e a URL global */
    const md5 = new Md5();
    this.ts = '1';
    this.private_key = '4d77f68594544ee25dab2c8ef8e1ef613d1ab10b';
    this.public_key = 'f2afdf8469b21340ee6757ce38c1f134';

    /* Metodo para criar o Hash */
    this.hash = md5
      .appendStr(this.ts)
      .appendStr(this.private_key)
      .appendStr(this.public_key)
      .end();

    this.data = {
      base_url: 'https://gateway.marvel.com/v1/public/characters',
      ts: this.ts,
      private_key: this.private_key,
      public_key: this.public_key,
      hash: this.hash,
    };
  }
}
