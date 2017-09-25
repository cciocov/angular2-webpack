import { Injectable, NgModule } from '@angular/core';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { Apollo } from 'apollo-angular';

import { ConfigService } from '../config.service';

@Injectable()
export class ConfiguredApolloClient {
  public apolloClient: ApolloClient;

  constructor(private config: ConfigService) {
    const networkInterface = createNetworkInterface({
      uri: '/' + this.config.data.x
    });

    this.apolloClient = new ApolloClient({
      networkInterface
    });
  }
}

export function apolloFactory(client: ConfiguredApolloClient) {
  return new Apollo({
    default: client.apolloClient
  });
}

@NgModule({
  providers: [
    ConfiguredApolloClient,
    {
      provide: Apollo,
      useFactory: apolloFactory,
      deps: [ConfiguredApolloClient]
    }
  ]
})
export class GraphQLModule {
}
