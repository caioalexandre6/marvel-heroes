import { CharacterDetailsComponent } from './../character-details/character-details.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { ResponseObj } from '../objetos/responseObj';

@Injectable()
export class ServiceMarvel {
  constructor(private http: HttpClient, private config: AppConfig) {}

  getCharacters(limit: number, offSet: number): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
          `?limit=`+`${limit}`+`&offset=`+`${offSet}`+`&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
          { headers }
        )
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  getCharactersByName(name: string, limit: number, offSet: number): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
          `?nameStartsWith=`+`${name}`+`&limit=`+`${limit}`+`&offset=`+`${offSet}`+`&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
          { headers }
        )
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  getComicsByName(characterId: number, name: string, limit: number, offSet: number): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
            '/' +
            `${characterId}` + '/comics' +
           `nameStartsWith=`+`${name}`+`&?limit=`+`${limit}`+`&offset=`+`${offSet}`+`&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
          { headers }
        )
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }

  getComicsById(characterId: number, limit: number, offSet: number): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
            '/' +
            `${characterId}` + '/comics' +
            `?limit=`+`${limit}`+`&offset=`+`${offSet}`+`&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
          { headers }
        )
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (err: any) => {
            reject(err);
          },
        });
    });
  }
}
