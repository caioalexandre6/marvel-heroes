import { CharacterDetailsComponent } from './../character-details/character-details.component';
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { map, Observable } from "rxjs";
import { AppConfig } from "../config/app.config";

@Injectable()
export class ServiceMarvel{
 constructor(private http: HttpClient, private config: AppConfig){
}


getCharacters(): Promise<any> {
  const headers = {
    'Content-Type': 'application/json',
  };
  return new Promise(async (resolve, reject) => {
    await this.http.get(this.config.data.base_url + `?ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`, { headers }).subscribe(
      (response: any) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

getCharacterById(characterId: string): Promise<any> {
  const headers = {
    'Content-Type': 'application/json',
  };
  return new Promise(async (resolve, reject) => {
    await this.http.get(this.config.data.base_url + '/' + `${characterId}` +`?ts=${this.config.data.ts}&apikey=${this.config.data.public_key}&hash=${this.config.data.hash}`, { headers }).subscribe(
      (response: any) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}


}
