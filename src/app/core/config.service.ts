import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConfigService {
  url: String = '//localhost:3000/api/v1/config';
  data: any = {};

  constructor(private http: Http) {
    console.log('ConfigService created.');
  }

  load(): Promise<Object> {
    console.log(this.http);
    console.log(this.url);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.data = {x: 1};
        resolve();
      }, 2500);
    });
  }
}

export function configServiceFactory(config: ConfigService) {
  return () => config.load();
}
