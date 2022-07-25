import { CharacterDetailsComponent } from './../character-details/character-details.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { ResponseObj } from '../objetos/responseObj';

@Injectable()
export class ServiceMarvel {
  constructor(private http: HttpClient, private config: AppConfig) {}

  /* requisao get retornando personagens definidos por quantidades e limites */
  getCharacters(limit: number, offSet: number): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
            `?limit=` +
            `${limit}` +
            `&offset=` +
            `${offSet}` +
            `&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
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

  /* requisao get retornando personagens definidos por nome, quantidades e limites */
  getCharactersByName(
    name: string,
    limit: number,
    offSet: number
  ): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
            `?nameStartsWith=` +
            `${name}` +
            `&limit=` +
            `${limit}` +
            `&offset=` +
            `${offSet}` +
            `&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
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

  /* requisao get retornando comics definidos por id, nome, quantidades e limites */
  getComicsByName(
    characterId: number,
    name: string,
    limit: number,
    offSet: number
  ): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
            '/' +
            `${characterId}` +
            '/comics' +
            `nameStartsWith=` +
            `${name}` +
            `&?limit=` +
            `${limit}` +
            `&offset=` +
            `${offSet}` +
            `&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
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

  /* requisao get retornando comics definidos por id, quantidades e limites */
  getComicsById(
    characterId: number,
    limit: number,
    offSet: number
  ): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return new Promise(async (resolve, reject) => {
      await this.http
        .get(
          this.config.data.base_url +
            '/' +
            `${characterId}` +
            '/comics' +
            `?limit=` +
            `${limit}` +
            `&offset=` +
            `${offSet}` +
            `&ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`,
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
