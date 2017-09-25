import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()
export class GraphQLService {
  constructor(private config: ConfigService) {
    console.log('GraphQLService created.');
    console.log(this.config);
  }
}
