import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLModule } from './graphql/graphql.module';

import { ConfigService, configServiceFactory } from './config.service';

@NgModule({
  imports: [
    CommonModule,
    GraphQLModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ]
})
export class CoreModule {
}
